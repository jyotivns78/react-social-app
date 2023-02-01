import express from "express";
import { getComments, addComment, deleteComment } from "../controllers/comment.js";

const router = express.Router()

// router.get("", getUser)
router.get("/", getComments);
router.get("/", addComment);
router.get("/", deleteComment);

export default router;