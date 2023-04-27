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
exports.EventoRepository = void 0;
const Evento_1 = require("../entities/Evento");
class EventoRepository {
    constructor(manager) {
        this.create = (evento) => __awaiter(this, void 0, void 0, function* () {
            const newEvento = yield this.manager.save(Evento_1.Evento, evento);
            return newEvento;
        });
        this.update = (id, evento) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.update(Evento_1.Evento, id, evento);
            const updatedEvento = yield this.manager.findOneOrFail(Evento_1.Evento, {
                where: {
                    id_evento: id,
                },
            });
            return updatedEvento;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const evento = yield this.manager.findOneOrFail(Evento_1.Evento, {
                where: {
                    id_evento: id,
                },
            });
            return evento;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const eventos = yield this.manager.find(Evento_1.Evento);
            return eventos;
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.delete(Evento_1.Evento, id);
            return result.affected !== 0;
        });
        this.manager = manager;
    }
}
exports.EventoRepository = EventoRepository;
//# sourceMappingURL=EventoRepository.js.map