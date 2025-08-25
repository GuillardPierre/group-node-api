import express from "express"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/users', (req, res) => {
const newUser = req.body;
newUser.id = users.length + 1;
users.push(newUser);
res.status(201).json(newUser);
});

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.listen(port, () => {
    console.log("App running on the port " + port)
});