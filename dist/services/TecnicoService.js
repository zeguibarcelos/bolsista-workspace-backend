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
exports.TecnicoService = void 0;
const database_1 = require("../database");
const TecnicoRepository_1 = require("../repositories/TecnicoRepository");
class TecnicoService {
    constructor(tecnicoRepository = new TecnicoRepository_1.TecnicoRepository(database_1.AppDataSource.manager)) {
        this.create = (tecnico) => __awaiter(this, void 0, void 0, function* () {
            const newTecnico = yield this.tecnicoRepository.create(tecnico);
            return newTecnico;
        });
        this.update = (matricula, tecnico) => __awaiter(this, void 0, void 0, function* () {
            const updatedTecnico = yield this.tecnicoRepository.update(matricula, tecnico);
            return updatedTecnico;
        });
        this.findByMatricula = (matricula) => __awaiter(this, void 0, void 0, function* () {
            const tecnico = yield this.tecnicoRepository.findByMatricula(matricula);
            return tecnico;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const tecnicos = yield this.tecnicoRepository.findAll();
            return tecnicos;
        });
        this.deleteByMatricula = (matricula) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.tecnicoRepository.deleteByMatricula(matricula);
            return result;
        });
        this.tecnicoRepository = tecnicoRepository;
    }
}
exports.TecnicoService = TecnicoService;
//# sourceMappingURL=TecnicoService.js.map