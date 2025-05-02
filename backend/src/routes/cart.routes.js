
import express from 'express';
import { addToCart, removeFromCart, getUserCart } from '../controllers/cartController.js';
import { isLogin } from '../../middleware.js';
import wrapAsync from "../../utils/wrapAsync.js";

const router = express.Router();

router.post('/add', isLogin, wrapAsync(addToCart));
router.delete('/remove/:id', isLogin, wrapAsync(removeFromCart));
router.get('/usercart', isLogin, wrapAsync(getUserCart));

export default router;
