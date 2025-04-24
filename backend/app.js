import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/routes/user.routes.js";
import listingRoutes from "./src/routes/listing.routes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

const PORT = process.env.PORT || 5000;
const dburl = process.env.MONGODB_URI;

async function main() {
    await mongoose.connect(dburl);
}

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/listings", listingRoutes);

app.get("/", (req,res) => {
    res.send("testing Done");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
