"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const panesController_1 = require("../controllers/panesController");
const auth_1 = require("../middleware/auth");
class PanesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosPanes/', auth_1.validarToken, panesController_1.panesController.mostrar_todos_panes);
        this.router.post('/crearPan/', auth_1.validarToken, panesController_1.panesController.createPan);
        this.router.put('/actualizarPan/:id', auth_1.validarToken, panesController_1.panesController.actualizarPan);
        this.router.delete('/eliminarPan/:id', auth_1.validarToken, panesController_1.panesController.eliminarPan);
    }
}
const panesRoutes = new PanesRoutes();
exports.default = panesRoutes.router;
