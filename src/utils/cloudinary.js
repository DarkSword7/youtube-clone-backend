import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file uploaded successfully
        console.log("File uploaded successfully on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove file from local directory if it fails to upload on cloudinary
        console.error("Error uploading file on cloudinary", error);
        return null;
    }
};

export { uploadOnCloudinary };
