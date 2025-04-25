import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'


 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.ClOUD_NAME, 
    api_key: process.env.api_key, 
    api_secret: process.env.ClOUD_API_SECRET// Click 'View API Keys' above to copy your API secret
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'crimatch',
      format: ["png", "jpg", "jpeg"], // supports promises as well
    },
  });

  export {cloudinary, storage}