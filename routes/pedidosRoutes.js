"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidosController_1 = require("../controllers/pedidosController");
const auth_1 = require("../middleware/auth");
class PedidosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosPedidos/', auth_1.validarToken, pedidosController_1.pedidosController.mostrar_todos_pedidos);
        this.router.post('/crearPedido/', auth_1.validarToken, pedidosController_1.pedidosController.createPedido);
        this.router.put('/actualizarPedido/:id', auth_1.validarToken, pedidosController_1.pedidosController.actualizarPedido);
        this.router.delete('/eliminarPedido/:id', auth_1.validarToken, pedidosController_1.pedidosController.eliminarPedido);
    }
}
const pedidosRoutes = new PedidosRoutes();
exports.default = pedidosRoutes.router;
