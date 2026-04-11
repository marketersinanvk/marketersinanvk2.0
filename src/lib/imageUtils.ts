/**
 * Utility to generate responsive image URLs for picsum.photos
 */
export function getResponsiveImageUrl(url: string, width: number): string {
  if (!url.includes('picsum.photos')) return url;
  
  // Replace the width/height part of the picsum URL
  // Example: https://picsum.photos/seed/dubai-shop/800/600.webp
  const parts = url.split('/');
  if (parts.length >= 2) {
    // Assuming the last two parts are width and height
    // We'll maintain the aspect ratio if possible, or just set width
    const height = Math.round((width / 800) * 600);
    parts[parts.length - 2] = width.toString();
    parts[parts.length - 1] = `${height}.webp`;
  }
  return parts.join('/');
}

export function getImageSrcSet(url: string): string {
  if (!url.includes('picsum.photos')) return '';
  
  const sizes = [400, 800, 1200];
  return sizes.map(w => `${getResponsiveImageUrl(url, w)} ${w}w`).join(', ');
}
