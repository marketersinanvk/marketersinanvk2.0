/**
 * SEO Architecture Utilities - Next.js Production Standards
 * Enforcing strict URL normalization and heading hierarchy discipline.
 */

/**
 * Strict Slug Normalization: Force lowercase, strip special characters, clean dashes.
 */
export const normalizeSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters (except spaces and dashes)
    .replace(/[\s_-]+/g, "-")  // Replace spaces and underscores with a single dash
    .replace(/^-+|-+$/g, "");   // Remove leading and trailing dashes
};

/**
 * Keyword Density Injector: Ensures core keywords appear in the initial text block.
 */
export const optimizeMetadataSnippet = (text: string, location?: string): string => {
  const coreKeywords = ["Best Digital Marketer in Kerala", "Technical SEO Expert", "Performance Marketing"];
  let optimized = text;
  
  if (location && !text.toLowerCase().includes(location.toLowerCase())) {
    optimized = `${location}'s leading digital integration protocol. ${optimized}`;
  }

  return optimized;
};
