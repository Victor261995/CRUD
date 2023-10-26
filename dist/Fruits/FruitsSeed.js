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
exports.fruitSeed = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const fruitSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fruitData = [
            {
                id: 1,
                name: 'banana',
                amount: '1 kg',
                price: 200
            },
            {
                id: 2,
                name: 'pera',
                amount: '1 kg',
                price: 500
            },
            {
                id: 3,
                name: 'papa',
                amount: '0.5 kg',
                price: 700
            },
            {
                id: 4,
                name: 'sandia',
                amount: '0.5 kg',
                price: 1700
            },
            {
                id: 5,
                name: 'naranja',
                amount: '2 kg',
                price: 250.75
            }
        ];
        for (const fruit of fruitData) {
            yield prisma.fruit.create({
                data: fruit,
            });
        }
        console.log('frutas agregadas');
    }
    catch (error) {
        console.log('error adding fruits');
    }
    finally {
        yield prisma.$disconnect();
    }
});
exports.fruitSeed = fruitSeed;
