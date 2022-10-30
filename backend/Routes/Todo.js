import { Router } from "express";
import  * as todoController from './../Controllers/todoController.js';

const router = Router();

router.get('/', todoController.getTodo);

router.delete('/:id',todoController.deleteTodo);

router.post('/',todoController.postTodo);

router.patch('/:id',todoController.patchTodo);

router.patch('/',todoController.clearTodo);

router.delete('/',todoController.clearAllTodo);

export default router;
