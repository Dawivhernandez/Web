"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = require("../controllers/ventasController");
const auth_1 = require("../middleware/auth");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasVentas/', auth_1.validarToken, ventasController_1.ventasController.mostrar_todas_ventas);
        this.router.post('/crearVenta/', auth_1.validarToken, ventasController_1.ventasController.createVenta);
        1;
        this.router.put('/actualizarVenta/:id', auth_1.validarToken, ventasController_1.ventasController.actualizarVenta);
        this.router.delete('/eliminarVenta/:id', auth_1.validarToken, ventasController_1.ventasController.eliminarVenta);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
