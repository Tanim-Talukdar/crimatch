import httpStatus from "http-status";
import Contact from "../models/contactfrom.js";


const contactInfo = async (req,res) => {
    try {

        const { email,subject , message} = req.body;
    

        if (!email || !message) {
          return res.status(httpStatus.BAD_REQUEST).json({ message: "Missing required fields" });
        }
    
        const newItem = new Listing({
          email,
          subject,    // Changed from image to imageObj
          message,
        });
    
        await newItem.save();
    
        res.status(httpStatus.CREATED).json({
          message: "Listing created successfully",
          listing: newItem,
        });
      } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          message: "Failed to create listing",
          error: error.message,
        });
      }
    };

    export {contactInfo};