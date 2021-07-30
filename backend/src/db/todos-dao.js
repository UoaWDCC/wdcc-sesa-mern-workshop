import { Todo } from "./todos-schema";
 
export async function createTodos(todos) {
    const dbTodos = [];
     todos.forEach(async function(todo) {
        const dbTodo = new Todo(todo);
        await dbTodo.save();
        dbTodos.push(dbTodo)
     })
     return dbTodos;
 } 

 export async function retrieveAllTodos() {
     return await Todo.find();
 }
 
 export async function retrieveTodo(id) {
     return await Todo.findById(id);
 }
 
 export async function updateTodo(todo) {
 
     const result = await Todo.findByIdAndUpdate(todo._id, todo, { new: true, useFindAndModify: false });
     return result ? true : false;
 }