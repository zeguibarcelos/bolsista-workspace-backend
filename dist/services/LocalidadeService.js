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
exports.LocalidadeService = void 0;
const database_1 = require("../database");
const LocalidadeRepository_1 = require("../repositories/LocalidadeRepository");
class LocalidadeService {
    constructor(localidadeRepository = new LocalidadeRepository_1.LocalidadeRepository(database_1.AppDataSource.manager)) {
        this.create = (localidade) => __awaiter(this, void 0, void 0, function* () {
            const newLocalidade = yield this.localidadeRepository.create(localidade);
            return newLocalidade;
        });
        this.update = (id, localidade) => __awaiter(this, void 0, void 0, function* () {
            const updatedLocalidade = yield this.localidadeRepository.update(id, localidade);
            return updatedLocalidade;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const localidade = yield this.localidadeRepository.findById(id);
            return localidade;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const localidades = yield this.localidadeRepository.findAll();
            return localidades;
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.localidadeRepository.deleteById(id);
            return result;
        });
        this.localidadeRepository = localidadeRepository;
    }
}
exports.LocalidadeService = LocalidadeService;
//# sourceMappingURL=LocalidadeService.js.map