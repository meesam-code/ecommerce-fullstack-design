import cloudinary from "../config/Cloudinary.js";

export const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "ecommerce", // Specify the folder name in Cloudinary
      resource_type: "auto", // Automatically determine the resource type
    });

    return {
      url: result.secure_url, // Return the secure URL of the uploaded file
      publicId: result.public_id, // Return the public ID of the uploaded file
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Cloudinary upload failed");
  }
};
