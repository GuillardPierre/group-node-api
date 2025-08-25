const express = require("express")
const app = express()
const port = 3000

const users = [{id: 1, name: "Jean"}, {id: 2, name:"Pierre"}]

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/users", (req,res) => {
    res.json(users)
})

app.listen(port, () => {
    console.log("App running on the port " + port)
})