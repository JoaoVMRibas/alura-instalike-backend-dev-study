import { getAllPosts } from "../models/postsModel.js";

export async function listAllPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts)
}

/* export async function getPost(req, res) {  
    const index = searchPostsByID(req.params.id);
    res.status(200).json(posts[index]);
} */