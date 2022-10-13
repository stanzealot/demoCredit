import express from 'express';
const router = express.Router();
import {UsersController} from '../controller/usersController'

const controller = new UsersController()
/* GET users listing. */
router.post('/',controller.createUser);
router.get('/',controller.getAllUsers)

export default router;
