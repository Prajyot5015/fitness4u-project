import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import { postSignup, postLogin} from "./controllers/user.js";
import { getMember, postMember } from "./controllers/member.js";
import { postPurchase } from "./controllers/purchase.js";
import { postAdminLogin, postAdminSignup } from "./controllers/adminlogin.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URl)
    if (conn) {
        console.log(`MongoDB connected successfully`);
    }

};
connectDB();


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Fitness4U"
    })
})


app.post("/signup", postSignup)

app.post("/login", postLogin )

app.post("/adminsignup", postAdminSignup )

app.post("/adminlogin", postAdminLogin )

app.post("/member", postMember )

app.get("/members", getMember )


app.post("/purchase", postPurchase )

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
})