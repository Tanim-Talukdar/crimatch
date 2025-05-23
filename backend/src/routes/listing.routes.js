import { Router } from "express";
import { getAlllisting, getListingDetail, newListing, search } from "../controllers/listingController.js";
import { isLogin } from "../../middleware.js";
import wrapAsync from "../../utils/wrapAsync.js";
import multer from "multer";
import { storage } from "../../cloudinary.js";

const upload = multer({ storage });


const router = Router();

router.get("/getAllListings", wrapAsync(getAlllisting));
router.get("/getAllListings/:id", wrapAsync(getListingDetail));
router.post("/newlisting",isLogin, upload.single("image"),wrapAsync(newListing));
router.get("/search" , wrapAsync(search));

export default router;
