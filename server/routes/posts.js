import express from "express";
import { getPosts, addPost, deletePost } from "../controllers/post.js";

const router = express.Router()

// router.get("", getUser)
router.get("/", getPosts);
router.get("/", addPost);
router.get("/", deletePost);



export default router