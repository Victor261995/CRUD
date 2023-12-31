"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../Controllers/userController");
const UserRouter = express_1.default.Router();
UserRouter.post('/user', userController_1.createUser);
UserRouter.post('/login', userController_1.loginUser);
UserRouter.get('/user/:id', userController_1.getUserById);
exports.default = UserRouter;
