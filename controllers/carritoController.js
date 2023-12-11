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
exports.carritoController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class CarritoController {
    mostrar_carrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Entrando a consulta...");
            const respuesta = yield database_1.default.query('SELECT * FROM carrito');
            res.json(respuesta);
        });
    }
    obtenerCarritoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM carrito WHERE ID_Usuario = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.status(404).json({ 'mensaje': 'Usuario tiene Carrito Vacio' });
        });
    }
    agregarcarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query("INSERT INTO carrito set ?", [req.body]);
            res.json(resp);
        });
    }
    eliminarcarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ID_Usuario } = req.params;
            const { ID_Pan } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM carrito WHERE ID_Usuario = ${ID_Usuario} AND ID_Pan = ${ID_Pan} `);
            res.json(resp);
        });
    }
}
exports.carritoController = new CarritoController();
