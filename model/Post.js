import mongoose from "mongoose";

const Posts = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
    },
    language: {
        type: String,
        require: true,
    },
    score: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
})


const post = mongoose.model("Post", Posts)
export default post

