import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/user.routes.js";
import listingRoutes from "./src/routes/listing.routes.js";
import contactRoutes from "./src/routes/contact.routes.js";
import reviewRoutes from "./src/routes/review.routes.js";
import CartRoutes from "./src/routes/cart.routes.js"
// import OpenAI from "openai"


if (process.env.NODE_ENV != "production"){
dotenv.config();
}

const app = express();

app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

// const openai = new OpenAI({
//     baseURL: 'https://openrouter.ai/api/v1/chat/completions',
//     apiKey: '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'
// });

const PORT = process.env.PORT || 5000;
const dburl = process.env.MONGODB_URI;

async function main() {
    await mongoose.connect(dburl);
}

app.post('/api/chat',(req, res) => {
    const userMessage = req.body.message;
    let botReply = "Sorry, I didn’t get that.";
  
    if (userMessage.includes("price")) {
      botReply = "Our prices vary by product. Please check the product page.";
    } else if (userMessage.includes("delivery")) {
      botReply = "We deliver within 3-5 business days.";
    } else if (userMessage.includes("return")) {
      botReply = "You can return products within 7 days.";
    }
  
    res.json({ reply: botReply });
    // const { message } = req.body;

    // try {
    //   const response = await openai.chat.completions.create({
    //     model: 'deepseek/deepseek-r1:free',
    //     messages: [
    //       { role: 'system', content: 'You are an ecommerce assistant' },
    //       { role: 'user', content: message }
    //     ],
    //   });
  
    //   res.json({ reply: response.data.choices[0].message.content.trim() });
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ reply: 'Error processing request' });
    // }
  });

main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

    app.use("/api/v1", [userRoutes, listingRoutes, contactRoutes,CartRoutes]);

app.get("/", (req,res) => {
    res.send("testing Done");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
