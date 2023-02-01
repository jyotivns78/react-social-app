import express from "express";
import { getLikes, addLike, deleteLike } from "../controllers/like.js";
// import { getUser } from "../controllers/user.js";

const router = express.Router()

// router.get("", getUser)
router.get("/", getLikes);
router.get("/", addLike);
router.get("/", deleteLike);

export default router