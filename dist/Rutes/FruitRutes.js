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
const fruitController_1 = require("../Controllers/fruitController");
const FruitRuter = express_1.default.Router();
FruitRuter.get('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const idAsNumber = id ? parseInt(id) : undefined;
    try {
        const fruit = yield (0, fruitController_1.getFruits)();
        res.json(fruit);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Can not get fruits" });
    }
}));
exports.default = FruitRuter;
