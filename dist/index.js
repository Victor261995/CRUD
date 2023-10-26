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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserRutes_1 = __importDefault(require("./Rutes/UserRutes"));
const BuyRutes_1 = __importDefault(require("./Rutes/BuyRutes"));
const FruitRutes_1 = __importDefault(require("./Rutes/FruitRutes"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3002;
app.use(body_parser_1.default.json());
app.use(UserRutes_1.default);
app.use(FruitRutes_1.default);
app.use(BuyRutes_1.default);
const backInit = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$connect();
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Error database start', error);
    }
});
backInit();
