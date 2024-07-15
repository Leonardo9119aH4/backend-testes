const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const path = require("path")
const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "main.html"))
})
app.listen(3003)
app.post("/api", async (req, res) => {
    console.log(req.cookies)
    res.cookie('username', 'JohnDoe', {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        path: '/api',
        secure: true,
        httpOnly: true,
        sameSite: 'Strict'
      })
    res.status(200)
})