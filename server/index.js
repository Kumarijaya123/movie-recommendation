require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const connection = require("./db")
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const { default: mongoose } = require('mongoose')


// database connection

connection()
// middle ware

app.use(express.json())
app.use(cors())
 
app.get("/", (req, res) => {
    res.send("Server is running!");
});
// routes
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.get("/db-status", (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.send("MongoDB is connected!");
    } else {
        res.send("MongoDB is not connected.");
    }
});

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})