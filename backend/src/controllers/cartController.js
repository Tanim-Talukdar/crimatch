import Cart from '../models/cart.js';
import Product from '../models/listing.js';


// Add to Cart
export const addToCart = async (req, res) => {
  
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  const product = await Product.findById(productId);
  if (!product) return res.status(400).send("Product not found");

  let cartItem = await Cart.findOne({ productId, userId });
  if (cartItem) {
    cartItem.quantity += quantity;
    cartItem.totalPrice = cartItem.quantity * product.price;
    await cartItem.save();
  } else {
    cartItem = new Cart({
      productId,
      quantity,
      userId,
      totalPrice: product.price * quantity
    });
    await cartItem.save();
  }

  res.status(200).json(cartItem);
};

// Remove from Cart
export const removeFromCart = async (req, res) => {
  const { id } = req.params;

  const cartItem = await Cart.findById(id);
  if (!cartItem) return res.status(400).send("Cart item not found");

  if (cartItem.userId.toString() !== req.user._id.toString()) {
    return res.status(403).send("Unauthorized");
  }

  await Cart.findByIdAndDelete(id);
  res.status(200).send("Item removed from cart");
};

// Get User's Cart
export const getUserCart = async (req, res) => {
  const userId = req.user._id;

  const cartItems = await Cart.find({ userId }).populate('productId');
  res.status(200).json(cartItems);
};
