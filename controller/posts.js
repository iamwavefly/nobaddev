import Posts from "../model/Post.js"
import Answers from "../model/Answer.js"
import {response} from "../helper/route.js"
// get single post
export const single_post = async (req, res) => {
    try {
        await Posts.findById({_id: req.params.id}, (err, result)=> {
            response(err, result, res, 201)
        }).populate("createdBy").sort({rank: -1}).exec()
    } catch (error) {
        console.log(error);
    }
}
// get all post
export const posts = async (req, res) => {
    try {
        const posts = await Posts.find().populate("createdBy").sort({score: -1}).exec()
        res.status(200).json({
            status: "ok",
            count: posts.length,
            message: posts
        })
    } catch (error) {
        console.log(error.message);
    }
}
// create post
export const newPost = async (req, res) => {
    try {
        const {title, content, language, createdBy} = req.body
        const post = new Posts({
            title,
            content,
            language,
            createdBy

        })
        await post.save((err, result) => {
            response(err, result, res, 201)
        })
    } catch (error) {
        console.log(error.message);
    }
}
// delete post
export const deletePost = async (req, res) => {
    try {
        await Posts.findByIdAndRemove({_id: req.params.id}, (err, result) => {
            response(err, result, res, 200)
        })
    } catch (error) {
        console.log(error.message);
    }
}
// update post
export const updatePost = async (req, res) => {
    try {
        const {title, content} = req.body
        await Posts.findByIdAndUpdate({_id: req.params.id}, {$set: {title, content}}, (err, result) => {
            response(err, result, res, 200)
        })
    } catch (error) {
        console.log(error.message);
    }
}
// upvote post
export const upvotePost = async (req, res) => {
    try {
        await Posts.findByIdAndUpdate({_id: req.params.id}, {$inc: {score: 0.5}}, {new: true}, (err, result) => {
            response(err, result, res, 200)
        })
    } catch (error) {
        console.log(error.message);
    }
}
// like post
export const likePost = async (req, res) => {
    try {
        await Posts.findByIdAndUpdate({_id: req.params.id}, {$inc: {like: 0.5}}, {new: true}, (err, result) => {
            response(err, result, res, 200)
        })
    } catch (error) {
        console.log(error.message);
    }
}

// [answers section]
// get single answer
export const answer = async (req, res) => {
    try {
        await Answers.findById({_id: req.params.id}, (err, result)=> {
            response(err, result, res, 200)
        }).populate("answerBy postAns").sort({score: -1}).exec()
    } catch (error) {
        console.log(error);
    }
}
// get answers 
export const allAnswers = async (req, res) => {
    try {
        const answer = await Answers.find().populate("answerBy postAns").sort({score: -1}).exec()
        res.status(200).json({
            status: "ok",
            count: answer.length,
            message: answer
        })
    } catch (error) {
        console.log(error.message);
    }
}
// submit answers 
export const createAnswer = async (req, res) => {
    try {
        const { answer, postAns, answerBy } = req.body
        const answer_new = new Answers({
            answer,
            postAns,
            answerBy
        })
        await answer_new.save((err, result) => {
            response(err, result, res, 201)
        })
    } catch (error) {
        console.log(error.message);
    }
}
// update answer
export const updateAnswer = async (req, res) => {
    try {
        const {answer} = req.body
        await Answers.findByIdAndUpdate({_id: req.params.id}, {$set: {answer}}, (err, result) => {
            response(err, result, res, 201)
        })
    } catch (error) {
        console.log(error.message);
    }
}