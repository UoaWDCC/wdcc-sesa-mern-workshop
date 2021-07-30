import express from 'express';

const router = express.Router();

import todos from './todos-routes';
router.use('/todos', todos);

module.exports = router;