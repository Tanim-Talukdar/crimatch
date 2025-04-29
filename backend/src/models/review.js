import mongoose, { Schema } from "mongoose";
import { User } from "./user.js";

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
},{ timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
