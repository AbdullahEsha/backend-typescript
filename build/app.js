"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/', (req, res) => {
    res.send('Hello world!!!');
});
app.listen(port, () => {
    console.log('SERVER IS UP ON PORT:', port);
});
