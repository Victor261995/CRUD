import express, { Router } from 'express';
import { createUser,loginUser,getUserById } from '../Controllers/userController';

const UserRouter=express.Router();
UserRouter.post('/user',createUser);
UserRouter.post('/login',loginUser);
UserRouter.get('/user/:id',getUserById)

export default UserRouter;