import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    isComplete: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

export { Todo };
