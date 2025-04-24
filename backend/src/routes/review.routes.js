import { Router } from "express";
import { reviews,reviewDelete } from "../controllers/reviewController.js";



const router = Router({mergeParams: true});
// Reviews
router.post("/",  reviews);

  //review Delete Route
router.delete("/:reviewId", reviewDelete);

module.exports = router;