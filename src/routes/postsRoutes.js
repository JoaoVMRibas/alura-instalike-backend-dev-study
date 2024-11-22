import express from "express";
import multer from "multer";
import cors from "cors";
import { getAllPosts, postNewPost, uploadNewImage, updateNewPost } from "../controllers/postsController.js";

const corsOption = {
    origin : "http://localhost:8000",
    optionsSuccessStatus : 200
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOption));

    app.get("/posts", getAllPosts);
    app.post("/posts", postNewPost);
    app.post("/upload", upload.single("image"), uploadNewImage);
    app.put("/update/:id", updateNewPost);
}

export default routes;