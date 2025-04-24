import { Router } from "express";
import { getAlllisting, getListingDetail, newListing } from "../controllers/listingController.js";


const router = Router();

router.route("/getAllListings").get(getAlllisting);
router.route("/getAllListings/:id").get(getListingDetail);
router.route("/newlisting").post(newListing)



export default router;