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
exports.TarefaController = void 0;
const TarefaService_1 = require("../services/TarefaService");
class TarefaController {
    constructor(tarefaService = new TarefaService_1.TarefaService()) {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tarefa = req.body;
                const newTarefa = yield this.tarefaService.create(tarefa);
                return res.status(201).json(newTarefa);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tarefa = req.body;
                const updatedTarefa = yield this.tarefaService.update(tarefa);
                return res.json(updatedTarefa);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const tarefa = yield this.tarefaService.findById(id);
                return res.json(tarefa);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.findByEventoId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const tarefas = yield this.tarefaService.findByEventoId(id);
                return res.json(tarefas);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tarefas = yield this.tarefaService.findAll();
                return res.json(tarefas);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.countAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tarefas = yield this.tarefaService.countAll();
                return res.json(tarefas);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.deleteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const result = yield this.tarefaService.deleteById(id);
                return res.json({ success: result });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.tarefaService = tarefaService;
    }
}
exports.TarefaController = TarefaController;
//# sourceMappingURL=TarefaController.js.map