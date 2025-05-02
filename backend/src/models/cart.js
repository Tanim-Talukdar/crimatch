import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  quantity: { type: Number, required: true, default: 1 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalPrice: { type: Number, required: true }
});

const Cart = mongoose.model('Cart', cartItemSchema);

export default Cart;