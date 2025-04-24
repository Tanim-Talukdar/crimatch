import mongoose, { Schema } from "mongoose";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    url: {
      type: String,
      set: (v) =>
        v === ""
          ? "https://www.shutterstock.com/image-photo/produced-polymer-plastic-pellet-factory-600nw-2491491327.jpg"
          : v,
    },
  },
  condition: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});



const Listing = mongoose.model("Listing", listingSchema);
export default Listing;