import { v } from 'convex/values';
import type { Id } from './_generated/dataModel';
import { action } from './_generated/server';
import { internal } from './_generated/api';

// GraphQL query to fetch player with avatar
const PLAYER_QUERY = `
  query Player($slug: String!) {
    players(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          name
          avatar {
            data {
              id
              attributes {
                name
                url
                blurhash
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

interface StrapiImageData {
  id: string;
  attributes: {
    name: string;
    url: string;
    blurhash?: string;
    width?: number;
    height?: number;
  };
}

interface PlayerResponse {
  players: {
    data: Array<{
      attributes: {
        slug: string;
        name: string;
        avatar?: {
          data: StrapiImageData;
        };
      };
    }>;
  };
}

/**
 * Fetch player data with avatar from Strapi GraphQL API
 */
export const fetchPlayerFromStrapi = action({
  args: {
    slug: v.string(),
    strapiUrl: v.optional(v.string()),
    strapiSecret: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const strapiUrl = args.strapiUrl || process.env.STRAPI_API_URL;
    const strapiSecret = args.strapiSecret || process.env.STRAPI_API_SECRET;

    if (!strapiUrl || !strapiSecret) {
      throw new Error('Strapi URL and secret must be configured');
    }

    try {
      const response = await fetch(`${strapiUrl}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${strapiSecret}`
        },
        body: JSON.stringify({
          query: PLAYER_QUERY,
          variables: { slug: args.slug }
        })
      });

      if (!response.ok) {
        throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`);
      }

      const data: { data: PlayerResponse } = await response.json();

      if (!data.data?.players?.data?.length) {
        throw new Error(`Player with slug "${args.slug}" not found`);
      }

      const player = data.data.players.data[0];
      return {
        slug: player.attributes.slug,
        name: player.attributes.name,
        avatar: player.attributes.avatar?.data || null
      };
    } catch (error) {
      console.error('Error fetching player from Strapi:', error);
      throw error;
    }
  }
});

/**
 * Download image from Strapi and upload to Convex File Storage
 * @deprecated Use fileMigration:migrateFile instead for better functionality
 */
export const migrateImageToConvex = action({
  args: {
    imageUrl: v.string(),
    fileName: v.string(),
    strapiImageId: v.optional(v.string())
  },
  handler: async (ctx, args): Promise<Id<'_storage'>> => {
    // Use the new generic file migration function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await ctx.runAction((internal as any).fileMigration.migrateFile, {
      fileUrl: args.imageUrl,
      fileName: args.fileName
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to migrate image');
    }

    return result.storageId as Id<'_storage'>;
  }
});

/**
 * Complete migration flow: fetch player from Strapi and migrate their avatar
 */
export const migratePlayerAvatar = action({
  args: {
    slug: v.string(),
    strapiUrl: v.optional(v.string()),
    strapiSecret: v.optional(v.string())
  },
  handler: async (
    ctx,
    args
  ): Promise<{
    success: boolean;
    message: string;
    playerData?: unknown;
    avatarStorageId?: string;
    originalImageData?: unknown;
    error?: string;
  }> => {
    try {
      const strapiUrl = args.strapiUrl || process.env.STRAPI_API_URL;
      const strapiSecret = args.strapiSecret || process.env.STRAPI_API_SECRET;

      if (!strapiUrl || !strapiSecret) {
        throw new Error('Strapi URL and secret must be configured');
      }

      // Fetch player data from Strapi
      const response = await fetch(`${strapiUrl}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${strapiSecret}`
        },
        body: JSON.stringify({
          query: PLAYER_QUERY,
          variables: { slug: args.slug }
        })
      });

      if (!response.ok) {
        throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`);
      }

      const data: { data: PlayerResponse } = await response.json();

      if (!data.data?.players?.data?.length) {
        throw new Error(`Player with slug "${args.slug}" not found`);
      }

      const player = data.data.players.data[0];
      const playerData = {
        slug: player.attributes.slug,
        name: player.attributes.name,
        avatar: player.attributes.avatar?.data || null
      };

      if (!playerData.avatar) {
        return {
          success: false,
          message: `Player "${args.slug}" has no avatar to migrate`,
          playerData
        };
      }

      // Download and migrate the avatar image using the new file migration
      const migrationResult: unknown = await ctx.runAction(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (internal as any).fileMigration.migrateFile,
        {
          fileUrl: playerData.avatar.attributes.url,
          fileName: playerData.avatar.attributes.name,
          mimeType: 'image/jpeg' // Assume JPEG for avatars, but detection will override if different
        }
      );

      // Type guard for migration result
      if (
        !migrationResult ||
        typeof migrationResult !== 'object' ||
        !('success' in migrationResult) ||
        !migrationResult.success
      ) {
        const error =
          migrationResult &&
          typeof migrationResult === 'object' &&
          'error' in migrationResult &&
          typeof migrationResult.error === 'string'
            ? migrationResult.error
            : 'Failed to migrate avatar';
        throw new Error(error);
      }

      const storageId: string =
        'storageId' in migrationResult && typeof migrationResult.storageId === 'string'
          ? migrationResult.storageId
          : '';

      return {
        success: true,
        message: `Successfully migrated avatar for player "${args.slug}"`,
        playerData,
        avatarStorageId: storageId,
        originalImageData: playerData.avatar.attributes
      };
    } catch (error) {
      console.error('Error in complete migration flow:', error);
      return {
        success: false,
        message: `Failed to migrate player avatar: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
});

/**
 * Test function to verify we can access the uploaded image
 * @deprecated Use fileMigration:getFileUrl instead
 */
export const getUploadedImageUrl = action({
  args: { storageId: v.id('_storage') },
  handler: async (
    ctx,
    args
  ): Promise<{
    success: boolean;
    url?: string;
    storageId?: string;
    error?: string;
  }> => {
    // Use the new generic file URL function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await ctx.runAction((internal as any).fileMigration.getFileUrl, {
      storageId: args.storageId
    });
  }
});
