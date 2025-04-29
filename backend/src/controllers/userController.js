import httpStatus from "http-status";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();



const JwtSecret = process.env.JWT_SECRET ;



const register = async (req, res) => {
    const { name, email, password } = req.body;

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

    const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role || "user" }, 
        JwtSecret,
        { expiresIn: '1h', algorithm: 'HS256' }
    );

    console.log("User registered successfully");

    res.status(httpStatus.CREATED).json({
        message: "User created successfully",
        token
    });
};




const login = async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }); 
    if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
    }

    
    const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role || "user" },
        JwtSecret,
        { expiresIn: "1h" , algorithm: 'HS256'}
    );
    console.log(JwtSecret);
    console.log("User Logged In");

    
    return res.status(httpStatus.OK).json({
        message: "User logged in successfully",
        token,
    });
};

export { login, register };
