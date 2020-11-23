import express from "express"
import cors from "cors"
import usersRoute from "./route/users.js"
import postRoute from "./route/posts.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import colors from "colors"

const App = express()

mongoose.connect("mongodb+srv://nobaddev:nobaddev123@cluster0.tqqou.mongodb.net/nobaddevs?retryWrites=true&w=majority", {useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true, findOneAndUpdate: true}, (err, res) => {
    if (err) console.log(err.message);
    console.log("server connected to db".blue);
})

App.use(express.urlencoded({extended: false}))

App.use(bodyParser.json())

App.use(cors())

App.get("/", (req, res)=> {
    res.send("Hey, Devs")
})
// USER ROUTE
App.use("/api/", usersRoute)
App.use("/api/", postRoute)
const PORT = process.env.PORT || 5000

App.listen(PORT, ()=> {
    console.log(`Server up and running PORT ${PORT}`.yellow);
})