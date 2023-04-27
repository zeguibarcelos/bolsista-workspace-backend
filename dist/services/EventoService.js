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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoService = void 0;
const database_1 = require("../database");
const EventoRepository_1 = require("../repositories/EventoRepository");
class EventoService {
    constructor(eventoRepository = new EventoRepository_1.EventoRepository(database_1.AppDataSource.manager)) {
        this.create = (evento) => __awaiter(this, void 0, void 0, function* () {
            const newEvento = yield this.eventoRepository.create(evento);
            return newEvento;
        });
        this.update = (id, evento) => __awaiter(this, void 0, void 0, function* () {
            const updatedEvento = yield this.eventoRepository.update(id, evento);
            return updatedEvento;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const evento = yield this.eventoRepository.findById(id);
            return evento;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const eventos = yield this.eventoRepository.findAll();
            return eventos;
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.eventoRepository.deleteById(id);
            return result;
        });
        this.eventoRepository = eventoRepository;
    }
}
exports.EventoService = EventoService;
//# sourceMappingURL=EventoService.js.map