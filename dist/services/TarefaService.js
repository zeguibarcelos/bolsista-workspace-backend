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
exports.TarefaService = void 0;
const database_1 = require("../database");
const Tarefa_1 = require("../entities/Tarefa");
const TarefaRepository_1 = require("../repositories/TarefaRepository");
class TarefaService {
    constructor(tarefaRepository = new TarefaRepository_1.TarefaRepository(database_1.AppDataSource.manager)) {
        this.create = (tarefa) => __awaiter(this, void 0, void 0, function* () {
            const lTarefa = new Tarefa_1.Tarefa(tarefa.descricao, tarefa.status, tarefa.evento, tarefa.tecnicos, tarefa.componentes);
            const savedTarefa = yield this.tarefaRepository.create(lTarefa);
            return savedTarefa;
        });
        this.update = (tarefa) => __awaiter(this, void 0, void 0, function* () {
            const updatedTarefa = yield this.tarefaRepository.update(tarefa.id_tarefa, tarefa);
            return updatedTarefa;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const tarefa = yield this.tarefaRepository.findById(id);
            return tarefa;
        });
        this.findByEventoId = (id) => __awaiter(this, void 0, void 0, function* () {
            const tarefa = yield this.tarefaRepository.findByEventoId(id);
            return tarefa;
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const tarefas = yield this.tarefaRepository.findAll();
            return tarefas;
        });
        this.countAll = () => __awaiter(this, void 0, void 0, function* () {
            const tarefas = yield this.tarefaRepository.countAll();
            return tarefas;
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.tarefaRepository.deleteById(id);
            return result;
        });
        this.tarefaRepository = tarefaRepository;
    }
}
exports.TarefaService = TarefaService;
//# sourceMappingURL=TarefaService.js.map