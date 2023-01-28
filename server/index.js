import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';
import likeRoutes from './routes/likes.js';
import cookieParser from "cookie-parser";
import cors from "cors";

//middleware 
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/likes', likeRoutes)

app.listen(8000, () => {
    console.log("API running on port 8000");
})
