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
exports.TecnicoRepository = void 0;
const Tecnico_1 = require("../entities/Tecnico");
class TecnicoRepository {
    constructor(manager) {
        this.create = (tecnico) => __awaiter(this, void 0, void 0, function* () {
            const newTecnico = yield this.manager.save(Tecnico_1.Tecnico, tecnico);
            return newTecnico;
        });
        this.update = (matricula, tecnico) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.update(Tecnico_1.Tecnico, matricula, tecnico);
            const updatedTecnico = yield this.manager.findOneOrFail(Tecnico_1.Tecnico, {
                where: {
                    matricula: matricula,
                },
            });
            return updatedTecnico;
        });
        this.findByMatricula = (matricula) => __awaiter(this, void 0, void 0, function* () {
            const tecnico = yield this.manager.findOneOrFail(Tecnico_1.Tecnico, {
                where: {
                    matricula: matricula,
                },
            });
            return tecnico;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const tecnicos = yield this.manager.find(Tecnico_1.Tecnico);
            return tecnicos;
        });
        this.deleteByMatricula = (matricula) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.delete(Tecnico_1.Tecnico, matricula);
            return result.affected !== 0;
        });
        this.manager = manager;
    }
}
exports.TecnicoRepository = TecnicoRepository;
//# sourceMappingURL=TecnicoRepository.js.map