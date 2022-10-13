import express from 'express';
const router = express.Router();
import {UsersController} from '../controller/usersController'

const controller = new UsersController()
/* GET users listing. */
router.post('/',controller.createUser);
router.get('/',controller.getAllUsers)
router.get('/:id',controller.findById)
router.post('/login',controller.login)
router.patch('/:id',controller.update)
router.delete('/:id',controller.remove)

export default router;
