const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
app.use(bodyParser.json())
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "main.html"))
})
app.listen(3003)
app.post("/api", async (req, res) => {
    console.log(req)
    res.status(200)
})