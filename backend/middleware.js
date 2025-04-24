import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; // Store this in .env in real projects

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