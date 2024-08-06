import { Router } from "express";
import { createPosts, getPosts } from "../controllers/posts";

const router: Router = Router();

router.get("/", getPosts);
router.post("/", createPosts)

export default router;
