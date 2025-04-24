import Review from "../models/review";


module.exports.reviews =  async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Reviews(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    
    await newReview.save();
    await listing.save();

};

module.exports.reviewDelete = async (req, res) => {
    let { id , reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: {reviews: reviewId} });
    await Reviews.findByIdAndDelete(reviewId);
    
};