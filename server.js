import express from "express";

const posts = [
    {
        id: 1,
        description: "Um gato",
        image: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        description: "Paisagem incrível",
        image: "https://picsum.photos/id/1018/500/300",
    },
    {
        id: 3,
        description: "Comida deliciosa",
        image: "https://picsum.photos/id/237/500/300",
    },
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) =>{
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) =>{
    const index = searchPostsByID(req.params.id);
    res.status(200).json(posts[index]);
});

function searchPostsByID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
}