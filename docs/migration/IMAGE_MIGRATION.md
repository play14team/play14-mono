# Image Migration from Strapi to Convex

This document describes how images and media files are migrated from Strapi's Azure Storage to Convex storage during the data migration process.

## Overview

The migration process now includes automatic transfer of all media files from Strapi's media library (stored in Azure Storage) to Convex's built-in storage system.

## What Gets Migrated

### Home Page

- Gallery images (`imageIds`)

### Sponsors

- Company logos (`logoId`)

### Players

- Profile avatars (`avatarId`)

### Articles

- Default/featured images (`defaultImageId`)
- Gallery images (`imageIds`)

### Games

- Default/featured images (`defaultImageId`)
- Gallery images (`imageIds`)
- Resource files like PDFs (`resourceIds`)

### Events

- Default/featured images (`defaultImageId`)
- Gallery images (`imageIds`)

## How It Works

1. **Fetch from Strapi**: The migration fetches image metadata from Strapi API including the Azure Storage URLs
2. **Download Images**: Each image is downloaded from its Azure Storage URL
3. **Upload to Convex**: Images are uploaded to Convex storage and receive new storage IDs
4. **Update References**: The new Convex storage IDs are saved in the database records

## Migration Functions

The image migration is handled by helper functions in `migration-helpers.ts`:

- `migrateSingleImage()`: Migrates a single image
- `migrateMultipleImages()`: Migrates an array of images
- `processImageField()`: Processes Strapi's image field format
- `processImagesField()`: Processes Strapi's multi-image field format

## Error Handling

- If an individual image fails to download or upload, the migration continues with other images
- Failed images return `undefined` instead of throwing errors
- Console logs indicate which images failed

## Testing

Run the test script to verify image migration:

```bash
node test-image-migration.js
```

This will:

1. Test the Strapi connection
2. Migrate a sample of entities with images
3. Verify that images were uploaded to Convex storage

## Notes

- Large images may take time to download and upload
- The migration preserves the original image data without modification
- Storage IDs in Convex are different from Strapi's media IDs
- All image URLs are automatically resolved (relative URLs are converted to absolute)
