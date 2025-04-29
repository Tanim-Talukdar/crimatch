import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import dotenv from "dotenv";
dotenv.config();


 // Configuration
  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET// Click 'View API Keys' above to copy your API secret
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'crimatch',
      allowedFormats: ["png", "jpg", "jpeg"], // supports promises as well
    },
  });

  export {cloudinary, storage}
