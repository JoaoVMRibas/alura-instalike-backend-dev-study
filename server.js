import express from "express";
import connectToDatabase from "./src/config/dbConfig.js";

const connection = await connectToDatabase(process.env.CONNECTION_STRING);

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", async (req, res) =>{
    const posts = await getAllPosts();
    res.status(200).json(posts);
});

/* app.get("/posts/:id", (req, res) =>{
    const index = searchPostsByID(req.params.id);
    res.status(200).json(posts[index]);
});
*/

async function getAllPosts(){
    const db = connection.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

/* function searchPostsByID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
} */