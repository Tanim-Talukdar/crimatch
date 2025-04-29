import httpStatus from "http-status";
import Listing from "../models/listing.js";
import { User } from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();




// Get all listings
const getAlllisting = async (req, res) => {
  const allListing = await Listing.find({});
  res.status(httpStatus.OK).json(allListing);
};

// Get listing details by ID
const getListingDetail = async (req, res) => {
  const listingId = req.params.id;
  const listingDetail = await Listing.findById(listingId);
  if (!listingDetail) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Listing not found" });
  }
  res.status(httpStatus.OK).json(listingDetail);
};

// Create a new listing
const newListing = async (req, res) => {
  const { title, description,  quantity, price, country, location, type, condition } = req.body;

  if (!title || !quantity || !price || !country || !location || !type || !condition || !description) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: "Missing required fields" });
  }

  let url = req.file.path;
  let filename = req.file.filename;

  let imageObj = {
    path: url,   
    filename: filename  
  };
  const userId = req.user.id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
  }
  const newItem = new Listing({
      title,
      description,
      image: imageObj,
      quantity,
      price,
      country,
      type,
      condition,
      location,
      author: userId
  });

  await newItem.save();

  res.status(httpStatus.CREATED).json({
      message: "Listing created successfully",
      listing: newItem,
  });
};



export { getAlllisting, getListingDetail, newListing };
