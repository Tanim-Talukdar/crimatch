import httpStatus from "http-status";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const JWT_SECRET = "your_jwt_secret";

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(httpStatus.BAD_REQUEST).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        // Generate JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role || "user" }, // Add role if available
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log("User registered successfully");

        res.status(httpStatus.CREATED).json({
            message: "User created successfully",
            token
        });

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error registering user" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email }); 
        if (!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
        }

        // 🔐 Generate JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role || "user" },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        console.log("User Logged In");
        
        return res.status(httpStatus.OK).json({
            message: "User logged in successfully",
            token
        });

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error logging in user" });
    }
};

export { login, register };