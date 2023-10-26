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
exports.deleteItem = exports.calculateTotalPrice = exports.buyItem = void 0;
const client_1 = require("@prisma/client");
const totalController_1 = require("./totalController");
const prisma = new client_1.PrismaClient();
const buyItem = (userId, items) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buysData = items.map((item) => ({
            userId: userId,
            fruitId: item.fruitId,
            quantity: item.quantity,
            totalPriceId: item.totalPriceId,
        }));
        const newBuy = yield prisma.buy.createMany({
            data: buysData,
        });
        return newBuy;
    }
    catch (error) {
        error;
    }
    ;
    console.log('error buying');
});
exports.buyItem = buyItem;
const calculateTotalPrice = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalPrice = yield (0, totalController_1.TotalPrice)(userId);
        return totalPrice;
    }
    catch (error) {
        throw error;
    }
});
exports.calculateTotalPrice = calculateTotalPrice;
const deleteItem = (buyId, fruitId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Erase = yield prisma.buy.deleteMany({
            where: {
                id: buyId,
                fruitId: fruitId,
            }
        });
        return Erase;
    }
    catch (error) {
        console.error("Error deleting item from buy", error);
    }
});
exports.deleteItem = deleteItem;
