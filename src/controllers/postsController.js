import fs from "fs";
import { listAllPosts, insertNewPost, updatePost } from "../models/postsModel.js";

export async function getAllPosts(req, res) {
    const posts = await listAllPosts();
    res.status(200).json(posts)
}

export async function postNewPost(req, res) {
    const newPost = req.body;
    try{
        const createdPost = await insertNewPost(newPost);
        res.status(200).json(createdPost);
    } catch(error){
        console.error(error.message);
        res.status(500).json({"Error": "Request failed."});
    }
}

export async function uploadNewImage(req, res) {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const createdPost = await insertNewPost(newPost);
        const updatedImage = `uploads/${createdPost.insertedId}.png`
        fs.renameSync(req.file.path, updatedImage)
        res.status(200).json(createdPost);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function updateNewPost(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.png`;
    const post = {
        imgUrl : urlImage,
        description: req.body.description,
        alt: req.body.alt
    };
    try{
        const updatedPost = await updatePost(id, post);
        res.status(200).json(updatedPost);
    }catch(error){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }    
}