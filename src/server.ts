import express, { request } from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ message: "Hello" });
});

app.post("/courses", (request, response) => {
    const { name } = request.body;
    return response.json({ name });
});

app.listen(3333, () => console.log("server is running!🚀"));
