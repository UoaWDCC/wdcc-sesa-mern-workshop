import express from 'express';
import { grabID } from '../api/steamapi';


/*
    Check if in game
    retrieve pfp
    user creation
    find game request
*/


const router = express.Router();

router.post('/', grabID);
// router.delete('/:id', deleteStudent);


export default router;