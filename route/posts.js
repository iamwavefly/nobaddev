import express from "express"
import { single_post, posts, newPost, deletePost, updatePost, upvotePost, likePost, answer, allAnswers, createAnswer, updateAnswer} from "../controller/posts.js"

const post = express.Router()
// get post
post.get("/post/:id", single_post)
// get posts
post.get("/posts", posts)
// create post
post.post("/post/new", newPost)
// delete post
post.delete("/post/r/:id", deletePost)
// update post
post.put("/post/u/:id", updatePost)
// upvote post
post.put("/post/v/:id", upvotePost)
// like post
post.put("/post/l/:id", likePost)

// [answer post]
// get answer
post.get("/answer/:id", answer)
// get answers
post.get("/answers", allAnswers)
// submit answer
post.post("/answer/new", createAnswer)
// edit answer
post.put("/answer/u/:id", updateAnswer)

export default post