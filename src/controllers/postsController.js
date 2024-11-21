import { listAllPosts, createNewPost } from "../models/postsModel.js";

export async function getAllPosts(req, res) {
    const posts = await listAllPosts();
    res.status(200).json(posts)
}

export async function postNewPost(req, res) {
    const newPost = req.body;
    try{
        const createdPost = await createNewPost(newPost);
        res.status(200).json(createdPost);
    } catch(error){
        console.error(error.message);
        res.status(500).json({"Error": "Request failed."});
    }
}