"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
const auth_1 = require("../middleware/auth");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/mostrar_carrito/', auth_1.validarToken, carritoController_1.carritoController.mostrar_carrito);
        this.router.put('/obtenerCarritoUsuario/:id', auth_1.validarToken, carritoController_1.carritoController.obtenerCarritoUsuario);
        this.router.delete('/eliminarcarrito/:id', auth_1.validarToken, carritoController_1.carritoController.eliminarcarrito);
        this.router.post('/agregarCarr/', auth_1.validarToken, carritoController_1.carritoController.agregarcarrito);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;
