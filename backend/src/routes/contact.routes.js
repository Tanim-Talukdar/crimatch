import { Router } from "express";
import { contactInfo } from "../controllers/contactController.js";
import wrapAsync from "../../utils/wrapAsync.js";
import { isLogin} from "../../middleware.js";


const router = Router();

router.post("/contact",isLogin ,wrapAsync(contactInfo));




export default router;
