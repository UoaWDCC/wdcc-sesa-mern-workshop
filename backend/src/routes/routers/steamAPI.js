import express from 'express';
import { grabID } from '../api/steamapi';



const router = express.Router();

router.post('/', grabID);
// router.delete('/:id', deleteStudent);


export default router;
