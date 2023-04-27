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
exports.TecnicoController = void 0;
const TecnicoService_1 = require("../services/TecnicoService");
class TecnicoController {
    constructor(tecnicoService = new TecnicoService_1.TecnicoService()) {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tecnico = yield this.tecnicoService.create(req.body);
                return res.status(201).json(tecnico);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const matricula = Number(req.params.matricula);
                const tecnico = yield this.tecnicoService.update(matricula, req.body);
                return res.json(tecnico);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.findByMatricula = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const matricula = Number(req.params.matricula);
                const tecnico = yield this.tecnicoService.findByMatricula(matricula);
                return res.json(tecnico);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tecnicos = yield this.tecnicoService.findAll();
                return res.json(tecnicos);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.deleteByMatricula = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const matricula = Number(req.params.matricula);
                const result = yield this.tecnicoService.deleteByMatricula(matricula);
                return res.json({ success: result });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.tecnicoService = tecnicoService;
    }
}
exports.TecnicoController = TecnicoController;
//# sourceMappingURL=TecnicoController.js.map