import { Router } from "express";
import { getAlllisting, getListingDetail, newListing } from "../controllers/listingController.js";
import { isLogin } from "../../middleware.js";


const router = Router();

router.route("/getAllListings").get(getAlllisting);
router.route("/getAllListings/:id").get(getListingDetail);
router.post("/newlisting",  newListing)



export default router;