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
exports.LocalidadeRepository = void 0;
const Localidade_1 = require("../entities/Localidade");
class LocalidadeRepository {
    constructor(manager) {
        this.create = (localidade) => __awaiter(this, void 0, void 0, function* () {
            const newLocalidade = yield this.manager.save(Localidade_1.Localidade, localidade);
            return newLocalidade;
        });
        this.update = (id, localidade) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.update(Localidade_1.Localidade, id, localidade);
            const updatedLocalidade = yield this.manager.findOneOrFail(Localidade_1.Localidade, {
                where: {
                    id_localidade: id,
                },
            });
            return updatedLocalidade;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const localidade = yield this.manager.findOneOrFail(Localidade_1.Localidade, {
                where: {
                    id_localidade: id,
                },
                relations: ['componentes']
            });
            return localidade;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const localidades = yield this.manager.find(Localidade_1.Localidade, { relations: ['componentes'] });
            return localidades;
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.delete(Localidade_1.Localidade, id);
            return result.affected !== 0;
        });
        this.manager = manager;
    }
}
exports.LocalidadeRepository = LocalidadeRepository;
//# sourceMappingURL=LocalidadeRepository.js.map