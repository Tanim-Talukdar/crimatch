// src/api/cart.js
import { client } from "../../client";

export const getCartItems = () => client.get('/cart/user');

export const removeFromCart = (id) => client.delete(`/cart/remove/${id}`);
