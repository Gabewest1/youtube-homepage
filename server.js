const path = require("path")
const express = require("express")

const app = express()

app.use(express.static(path.resolve(__dirname)))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Connected to port:", PORT))
