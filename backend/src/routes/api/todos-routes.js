import express from 'express';
import * as todosDao from '../../db/todos-dao';
import mongoose from 'mongoose';

const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;
const HTTP_BAD_REQUEST = 400;

const router = express.Router();

router.post('/', async function(req, res) {
    const newTodos = await todosDao.createTodos(req.body);
    res.status(HTTP_CREATED)
        .header('location', `/api/todos`)
        .json(newTodos);
});

router.get('/', async function (req, res) {
    res.json(await todosDao.retrieveAllTodos());
});

router.put('/:id', async function (req, res) {
    const { id } = req.params;
    const todo = {
        ...req.body,
        _id: id
    };
    const success = await todosDao.updateTodo(todo);
    res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

export default router;