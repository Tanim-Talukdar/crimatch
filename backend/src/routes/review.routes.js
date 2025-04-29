import { Router } from "express";
import { reviews,reviewDelete } from "../controllers/reviewController.js";



const router = Router({mergeParams: true});

router.post("/",  reviews);
router.delete("/:reviewId", reviewDelete);

export default router;
