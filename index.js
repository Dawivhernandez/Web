"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const panesRoutes_1 = __importDefault(require("./routes/panesRoutes"));
const ventasRoutes_1 = __importDefault(require("./routes/ventasRoutes"));
const pedidosRoutes_1 = __importDefault(require("./routes/pedidosRoutes"));
const detallePRoutes_1 = __importDefault(require("./routes/detallePRoutes"));
const carritoRoutes_1 = __importDefault(require("./routes/carritoRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/panes', panesRoutes_1.default);
        this.app.use('/api/ventas', ventasRoutes_1.default);
        this.app.use('/api/pedidos', pedidosRoutes_1.default);
        this.app.use('/api/detalleP', detallePRoutes_1.default);
        this.app.use('/api/carrito', carritoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servidor se esta ejecutando en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
