import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import messageRouter from "./routers/message.route";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: ["portfolio-aflah-alifus-projects.vercel.app"],
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
    })
);

app.use(express.json());
app.use("/api", messageRouter);

const mongoURI: string =
    process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";
mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("Backend API is running!");
    res.send(process.env.MONGODB_URI);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
