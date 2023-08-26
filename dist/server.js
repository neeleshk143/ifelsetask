"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const responseInterceptor_1 = require("./interceptors/responseInterceptor");
const communicationController_1 = require("./controllers/communicationController");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(responseInterceptor_1.responseInterceptor);
app.use((0, cors_1.default)());
app.post('/api/earth-mars-comm/message', communicationController_1.sendMessage);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
