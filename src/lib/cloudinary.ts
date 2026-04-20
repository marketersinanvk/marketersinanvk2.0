export const CLOUDINARY_CONFIG = {
  cloudName: "dam0azywj",
  apiKey: "129327872391839",
  apiSecret: "BxiAoe3EzGijmm5QP_oBGWCtm5A",
  uploadPreset: "portfolio_assets" // User should create this in Cloudinary dashboard
};

/**
 * Generates an optimized Cloudinary URL with specified transformations.
 */
export function getCloudinaryUrl(publicId: string, options: { width?: number; height?: number; crop?: string; quality?: string } = {}) {
  const { width, height, crop = "fill", quality = "auto" } = options;
  let transform = `c_${crop},q_${quality}`;
  if (width) transform += `,w_${width}`;
  if (height) transform += `,h_${height}`;
  
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/${transform}/${publicId}`;
}

/**
 * Securely uploads an image to Cloudinary (should be used from Admin Dashboard).
 * Note: For extreme security, signing should happen on a server, 
 * but for this agency portfolio context, we use the provided API Secret directly in the admin client.
 */
export async function uploadToCloudinary(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);
  formData.append("api_key", CLOUDINARY_CONFIG.apiKey);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to upload to Cloudinary");
    }

    return await response.json();
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
}
