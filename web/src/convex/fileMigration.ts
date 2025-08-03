import { action } from './_generated/server';
import { v } from 'convex/values';

/**
 * Download any file from a URL and return it as a Blob
 */
async function downloadFile(url: string): Promise<Blob> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download file: ${response.status} ${response.statusText}`);
  }
  return await response.blob();
}

/**
 * Get the MIME type from a URL, filename, or file extension
 * Supports images, videos, documents, audio, and other file types
 */
function getMimeType(url: string, providedMime?: string): string {
  // If MIME type is provided, use it
  if (providedMime) {
    return providedMime;
  }

  const extension = url.split('.').pop()?.toLowerCase();
  const mimeTypeMap: Record<string, string> = {
    // Images
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    bmp: 'image/bmp',
    tiff: 'image/tiff',
    ico: 'image/x-icon',

    // Videos
    mp4: 'video/mp4',
    avi: 'video/x-msvideo',
    mov: 'video/quicktime',
    wmv: 'video/x-ms-wmv',
    flv: 'video/x-flv',
    webm: 'video/webm',
    mkv: 'video/x-matroska',
    '3gp': 'video/3gpp',
    m4v: 'video/x-m4v',

    // Audio
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    ogg: 'audio/ogg',
    aac: 'audio/aac',
    flac: 'audio/flac',
    m4a: 'audio/mp4',
    wma: 'audio/x-ms-wma',

    // Documents
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    odt: 'application/vnd.oasis.opendocument.text',
    ods: 'application/vnd.oasis.opendocument.spreadsheet',
    odp: 'application/vnd.oasis.opendocument.presentation',
    rtf: 'application/rtf',
    txt: 'text/plain',

    // Archives
    zip: 'application/zip',
    rar: 'application/vnd.rar',
    '7z': 'application/x-7z-compressed',
    tar: 'application/x-tar',
    gz: 'application/gzip',

    // Other common types
    json: 'application/json',
    xml: 'application/xml',
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    csv: 'text/csv'
  };

  return mimeTypeMap[extension || ''] || 'application/octet-stream';
}

/**
 * Extract filename from URL, removing query parameters and path
 */
function getFileNameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.split('/').pop() || 'unknown';
    return decodeURIComponent(filename);
  } catch {
    // Fallback if URL parsing fails
    return url.split('/').pop()?.split('?')[0] || 'unknown';
  }
}

/**
 * Generic file migration function - works with any file type
 * This is the main function to use for migrating files from Strapi to Convex
 */
export const migrateFile = action({
  args: {
    fileUrl: v.string(),
    fileName: v.optional(v.string()),
    mimeType: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    try {
      console.log(`Downloading file from: ${args.fileUrl}`);

      // Download the file
      const fileBlob = await downloadFile(args.fileUrl);
      const detectedMimeType = getMimeType(args.fileUrl, args.mimeType);
      const fileName = args.fileName || getFileNameFromUrl(args.fileUrl);

      console.log(
        `Downloaded file: ${fileName} (${fileBlob.size} bytes, type: ${detectedMimeType})`
      );

      // Upload to Convex File Storage
      const storageId = await ctx.storage.store(fileBlob);

      console.log(`Uploaded to Convex storage: ${storageId}`);

      return {
        success: true,
        storageId,
        originalUrl: args.fileUrl,
        fileName,
        fileSize: fileBlob.size,
        mimeType: detectedMimeType
      };
    } catch (error) {
      console.error('Error migrating file:', error);
      return {
        success: false,
        originalUrl: args.fileUrl,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
});

/**
 * Migrate multiple files from an array of URLs
 * Useful for Strapi fields that contain multiple files
 */
export const migrateMultipleFiles = action({
  args: {
    fileUrls: v.array(v.string()),
    fileNames: v.optional(v.array(v.string())),
    mimeTypes: v.optional(v.array(v.string()))
  },
  handler: async (ctx, args) => {
    const results = [];
    let successCount = 0;
    let failureCount = 0;
    let totalSize = 0;

    console.log(`Starting batch migration of ${args.fileUrls.length} files`);

    for (let i = 0; i < args.fileUrls.length; i++) {
      const fileUrl = args.fileUrls[i];
      const fileName = args.fileNames?.[i];
      const mimeType = args.mimeTypes?.[i];

      try {
        console.log(`Downloading file ${i + 1}/${args.fileUrls.length} from: ${fileUrl}`);

        const fileBlob = await downloadFile(fileUrl);
        const detectedMimeType = getMimeType(fileUrl, mimeType);
        const finalFileName = fileName || getFileNameFromUrl(fileUrl);

        console.log(
          `Downloaded file: ${finalFileName} (${fileBlob.size} bytes, type: ${detectedMimeType})`
        );

        const storageId = await ctx.storage.store(fileBlob);

        console.log(`Uploaded to Convex storage: ${storageId}`);

        results.push({
          success: true,
          storageId,
          originalUrl: fileUrl,
          fileName: finalFileName,
          fileSize: fileBlob.size,
          mimeType: detectedMimeType
        });

        successCount++;
        totalSize += fileBlob.size;
      } catch (error) {
        console.error(`Error migrating file ${fileUrl}:`, error);
        results.push({
          success: false,
          originalUrl: fileUrl,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        failureCount++;
      }
    }

    console.log(
      `Batch migration completed: ${successCount} success, ${failureCount} failures, ${totalSize} bytes total`
    );

    return {
      success: failureCount === 0,
      results,
      successCount,
      failureCount,
      totalSize
    };
  }
});

/**
 * Get file information without downloading (useful for validation)
 */
export const getFileInfo = action({
  args: { fileUrl: v.string() },
  handler: async (ctx, args) => {
    try {
      const response = await fetch(args.fileUrl, { method: 'HEAD' });

      if (!response.ok) {
        throw new Error(`Failed to get file info: ${response.status} ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type') || getMimeType(args.fileUrl);
      const contentLength = response.headers.get('content-length');
      const fileName = getFileNameFromUrl(args.fileUrl);

      return {
        success: true,
        url: args.fileUrl,
        fileName,
        mimeType: contentType,
        size: contentLength ? parseInt(contentLength, 10) : null,
        lastModified: response.headers.get('last-modified'),
        etag: response.headers.get('etag')
      };
    } catch (error) {
      console.error('Error getting file info:', error);
      return {
        success: false,
        url: args.fileUrl,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
});

/**
 * Get uploaded file URL from Convex storage
 */
export const getFileUrl = action({
  args: { storageId: v.id('_storage') },
  handler: async (ctx, args) => {
    try {
      const url = await ctx.storage.getUrl(args.storageId);
      return {
        success: true,
        url,
        storageId: args.storageId
      };
    } catch (error) {
      console.error('Error getting file URL:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
});
