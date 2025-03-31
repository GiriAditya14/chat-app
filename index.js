import express from "express";
import mongoose, { Schema } from "mongoose";
import cookieParser from "cookie-parser";
import "./database/connection.js"
import cors from "cors";

import userRoutes from "./routes/user.routes.js"
import conversationRoutes from "./routes/conversation.routes.js"
import messageRoutes from "./routes/message.routes.js"


const app = express();

const PORT = 8000;


app.use(express.json());    // data coming in req body can be read
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin:"http://localhost:3000"
}))

// app.get("/", (req, res) => {
//     res.send(`Welcome to backend`)
// })

app.use("/api/auth", userRoutes);
app.use("/api/conversation", conversationRoutes)
app.use("/api/chat", messageRoutes)


app.listen(PORT, () => {
    console.log(`Backend is running on port number ${PORT}`)
})

