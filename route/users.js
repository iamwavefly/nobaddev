import express from "express"
import { users, user, newUser } from "../controller/users.js"

const route = express.Router()
// get user
route.get("/users", users)
route.get("/user/:id", user)
// new user
route.post("/user/new", newUser)

export default route