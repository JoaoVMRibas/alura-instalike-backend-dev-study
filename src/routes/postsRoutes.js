import express from "express";
import { getAllPosts, postNewPost } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", getAllPosts);
    app.post("/posts", postNewPost)    
}

export default routes;