import express from "express"
import Users from "../model/Users.js"
import { response } from "../helper/route.js"

const controllers = express.Router()

// get all users
export const users = async (req, res) => {
    try {
        await Users.find((err, result)=> {
            response(err, result, res, 200)
        })
    } catch (error) {
        console.log(error.message);
    }
}

// get single user
export const user = async (req, res) => {
    try {
        await Users.findById({_id: req.params.id}, (err, result)=> {
            response(err, result, res, 201)
        })
    } catch (error) {
        console.log(error);
    }
}

// register new user
export const newUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const user = new Users({
            username,
            email,
            password
        })
        await user.save((err, result) => {
            response(err, result, res, 201)
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default controllers