"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = express_1.default();
    }
    async listen() {
        await this.app.listen(3000);
        console.log("Server on Port", 3000);
    }
}
exports.App = App;
