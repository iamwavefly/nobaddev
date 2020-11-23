import mongoose from "mongoose"

const Answers = new mongoose.Schema({
    answer: {
        type: String,
    },
    score: {
        type: Number,
        default: 0
    },
    accept: {
        type: Boolean,
        default: false
    },
    answerBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    postAns: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
})
 
const answer = mongoose.model("Answer", Answers)
export default answer