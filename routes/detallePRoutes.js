"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallePController_1 = require("../controllers/detallePController");
const auth_1 = require("../middleware/auth");
class DetallePRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/listadeunDetalle/', auth_1.validarToken, detallePController_1.detallePController.listaunDetalle);
        this.router.post('/crearDetalleP/', auth_1.validarToken, detallePController_1.detallePController.createDetalleP);
        this.router.put('/actualizarDetalleP/:id', auth_1.validarToken, detallePController_1.detallePController.actualizarDetalleP);
        this.router.delete('/eliminarDetalleP/:id', auth_1.validarToken, detallePController_1.detallePController.eliminarDetalleP);
    }
}
const detallePRoutes = new DetallePRoutes();
exports.default = detallePRoutes.router;
