const express = require("express"),
    app = express()

app.use("/", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(80, () => {
    console.log("Server is running on port 80")
})