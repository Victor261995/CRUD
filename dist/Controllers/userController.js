"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.loginUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const alredyUser = yield prisma.user.findFirst({
            where: { email },
        });
        if (alredyUser) {
            return res.status(400).json({ error: 'User already being register' });
        }
        const newUser = yield prisma.user.create({
            data: {
                name,
                email,
                password
            },
        });
        return res.json(newUser);
    }
    catch (error) {
        console.error('Error Creating user', error);
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield prisma.user.findFirst({
            where: { email: email },
            include: {
                Buys: true,
                TotalPrice: true
            }
        });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        return res.json(user);
    }
    catch (error) {
        console.error('error al iniciar sesion', error);
        res.status(500).json({ error: 'error al iniciar sesion' });
    }
});
exports.loginUser = loginUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const user = yield prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                Buys: true,
                TotalPrice: true,
            },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(user);
    }
    catch (error) {
        console.error('Error getting user', error);
        res.status(500).json({ error: 'Error getting user' });
    }
});
exports.getUserById = getUserById;
