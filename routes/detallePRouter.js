"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallePController_1 = require("../controllers/detallePController");
class DetallePRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/listadeunDetalle/', detallePController_1.detallePController.listaunDetalle);
        this.router.post('/crearDetalleP/', detallePController_1.detallePController.createDetalleP);
        this.router.put('/actualizarDetalleP/:id', detallePController_1.detallePController.actualizarDetalleP);
        this.router.delete('/eliminarDetalleP/:id', detallePController_1.detallePController.eliminarDetalleP);
    }
}
const detallePRoutes = new DetallePRoutes();
exports.default = detallePRoutes.router;
