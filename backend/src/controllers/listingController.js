import httpStatus from "http-status";
import Listing from "../models/listing.js";


const getAlllisting = async (req, res) => {
    try {
        const allListing = await Listing.find({});
        res.status(httpStatus.OK).json(allListing);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Failed to fetch listings",
        error: error.message,
        });
    }
};

const getListingDetail = async (req,res) => {
    try{
        const listingId = req.params.id;
        const listingDetail = await Listing.findById(listingId);
        if (!listingDetail) {
            res.status(httpStatus.NOT_FOUND).json({ message: "Listing not found" });
            console.log("not-Found")
            return;
        }
    res.status(httpStatus.OK).json(listingDetail);
    console.log("found");
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Failed to fetch listings",
        error: error.message,
        });
    }
};

const newListing = async (req,res) => {
    try {
        // Extract type and condition from req.body
        const { title, description, image, quantity, price, country, location, type, condition } = req.body;
    
        // Add description, type, and condition to required fields check
        if (!title || !quantity || !price || !country || !location || !type || !condition || !description) {
          return res.status(httpStatus.BAD_REQUEST).json({ message: "Missing required fields" });
        }
    
        // Wrap image string into object with url property
        const imageObj = { url: image };
    
        const newItem = new Listing({
          title,
          description,
          image: imageObj,      // Changed from image to imageObj
          quantity,
          price,
          country,
          type,
          condition,
          location
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



export { getAlllisting, getListingDetail, newListing };