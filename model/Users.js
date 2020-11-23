import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {require: true, type: String},
    email: {require: true, type: String},
    rank: {type: Number, default: 3.0},
    badge: {type: String, default: "Newbies"},
    commu_score: {type: String, default: 0},
    avatar: {type: String},
    password: {require: true, type: String},
    joinAt: {type: Date, default: Date.now}
})

const Users = mongoose.model("User", userSchema)

export default Users
