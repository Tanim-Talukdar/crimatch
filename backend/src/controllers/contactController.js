import httpStatus from "http-status";
import Contact from "../models/contactfrom.js";
import { User } from "../models/user.js";




const contactInfo = async (req,res) => {
        const { email,subject , message} = req.body;
        if (!email || !message) {
          return res.status(httpStatus.BAD_REQUEST).json({ message: "Missing required fields" });
        }
        const userId = req.user.id;
        const user = await User.findById(userId);
          if (!user) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
          }
        const newItem = new Contact({
          email,
          subject,    
          message,
          user : userId
        });
        await newItem.save();
        res.status(httpStatus.CREATED).json({
          message: "Listing created successfully",
        });
      
    };

    export {contactInfo};
