export function generateBlurDataURL(width = 10, height = 10): string {
  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) {
    return 'data:image/svg+xml,%3Csvg width="10" height="10" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="10" height="10" fill="%23e5e7eb"/%3E%3C/svg%3E';
  }

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return 'data:image/svg+xml,%3Csvg width="10" height="10" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="10" height="10" fill="%23e5e7eb"/%3E%3C/svg%3E';
  }

  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(0, 0, width, height);

  return canvas.toDataURL('image/webp', 0.1);
}

export function generateSrcSet(
  url: string,
  widths: number[] = [640, 768, 1024, 1280, 1536]
): string {
  if (!url || !url.includes('http')) return '';

  return widths
    .map((width) => {
      const urlObj = new URL(url);
      urlObj.searchParams.set('w', width.toString());
      return `${urlObj.toString()} ${width}w`;
    })
    .join(', ');
}

export function getSizes(
  mobile: string = '100vw',
  tablet: string = '50vw',
  desktop: string = '33vw'
): string {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
}

export function getOptimizedImageUrl(
  url: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'auto';
  } = {}
): string {
  if (!url || !url.includes('http')) return url;

  const urlObj = new URL(url);

  if (options.width) {
    urlObj.searchParams.set('w', options.width.toString());
  }

  if (options.height) {
    urlObj.searchParams.set('h', options.height.toString());
  }

  if (options.quality) {
    urlObj.searchParams.set('q', options.quality.toString());
  }

  if (options.format) {
    urlObj.searchParams.set('fm', options.format);
  }

  return urlObj.toString();
}
