import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userID: String,
    name: String,
    email: String,
    gameID: Number,
    playing: Boolean,
    steamID: String,
    initial: Number,
    current: Number
})

const gameSchema = mongoose.Schema({
    amount: Number,
    users: Array,
    type: Number
})