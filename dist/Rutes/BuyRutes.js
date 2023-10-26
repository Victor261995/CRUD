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
exports.buyRouter = void 0;
const buysController_1 = require("../Controllers/buysController");
const express_1 = require("express");
exports.buyRouter = (0, express_1.Router)();
exports.buyRouter.post('/BuyItem', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, items } = req.body;
        const result = yield (0, buysController_1.buyItem)(userId, items);
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not add fruit' });
    }
}));
exports.buyRouter.delete('/DeleteItem/:BuyId/:FruitId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buyId = parseInt(req.params.buyId);
        const fruitId = parseInt(req.params.fruitId);
        const result = yield (0, buysController_1.deleteItem)(buyId, fruitId);
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting Fruit' });
    }
}));
exports.buyRouter.get('/TotalPrice', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const totalPrice = yield (0, buysController_1.calculateTotalPrice)(userId);
        res.status(200).json({ totalPrice });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error gettin total price' });
    }
}));
exports.default = exports.buyRouter;
