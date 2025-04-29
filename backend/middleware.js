import jwt from 'jsonwebtoken';
import {User} from './src/models/user.js';
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET; // Store this in .env in real projects



export const isLogin = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // No header or no token → 401 “User not logged in”
  if (!authHeader) return res.status(401).json({ message: "User not logged inn" });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: "User not logged innn" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "User not logged innnnn" });

    req.user = user;

    next();
  } catch (err) {
    // invalid or expired token → also 401 “User not logged in”
    return res.status(401).json({ message: "server Erron" });
  }
};
