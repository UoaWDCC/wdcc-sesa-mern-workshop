import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: new mongoose.Schema.Types.ObjectId,
    userID: String,
    name: String,
    email: String,
    gameID: Number,
    playing: Boolean,
    steamID: String,
    initial: Number,
    current: Number,
    overall: Number
})

const gameSchema = new mongoose.Schema({
    _id: new mongoose.Schema.Types.ObjectId,
    amount: Number,
    users: Array,
    type: Number,
    leaderboard: Array
})

const user = mongoose.model('user', userSchema);
const game = mongoose.model('game', gameSchema);

export {user, game};