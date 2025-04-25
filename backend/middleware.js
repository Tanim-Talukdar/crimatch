import jwt from 'jsonwebtoken';
import {User} from './src/models/user.js';
const JWT_SECRET = 'your_jwt_secret'; // Store this in .env in real projects



export const isLogin = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // No header or no token → 401 “User not logged in”
  if (!authHeader) 
    return res.status(401).json({ message: "User not logged in" });

  const token = authHeader.split(' ')[1];
  if (!token) 
    return res.status(401).json({ message: "User not logged in" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) 
      return res.status(401).json({ message: "User not logged in" });

    req.user = user;
    next();
  } catch (err) {
    // invalid or expired token → also 401 “User not logged in”
    return res.status(401).json({ message: "User not logged in" });
  }
};


export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: "Authorization header missing" });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(403).json({ message: "Token missing" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    if (user.role !== 'admin') return res.status(403).json({ message: "Access denied" });

    req.user = user;
    next();
  });
};