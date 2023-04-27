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
exports.LocalidadeController = void 0;
const LocalidadeService_1 = require("../services/LocalidadeService");
class LocalidadeController {
    constructor(localidadeService = new LocalidadeService_1.LocalidadeService()) {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const localidade = yield this.localidadeService.create(req.body);
                return res.status(201).json(localidade);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const localidade = yield this.localidadeService.update(id, req.body);
                return res.json(localidade);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const localidade = yield this.localidadeService.findById(id);
                return res.json(localidade);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const localidades = yield this.localidadeService.findAll();
                return res.json(localidades);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.deleteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const result = yield this.localidadeService.deleteById(id);
                return res.json({ success: result });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
        this.localidadeService = localidadeService;
    }
}
exports.LocalidadeController = LocalidadeController;
//# sourceMappingURL=LocalidadeController.js.map