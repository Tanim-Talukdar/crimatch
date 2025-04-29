import { Review } from "../models/review.js";
import  Listing  from "../models/listing.js";




const reviews =  async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    
    await newReview.save();
    await listing.save();
};

const reviewDelete = async (req, res) => {
    let { id , reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: {reviews: reviewId} });
    await Review.findByIdAndDelete(reviewId);
    
}; 

export {reviewDelete , reviews}
