"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
const typeorm_1 = require("typeorm");
const Evento_1 = require("./Evento");
const Tecnico_1 = require("./Tecnico");
const Componente_1 = require("./Componente");
let Tarefa = class Tarefa {
    constructor(descricao, status, evento, tecnicos, componentes) {
        this.descricao = descricao;
        this.status = status;
        this.evento = evento;
        this.tecnicos = tecnicos;
        this.componentes = componentes;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tarefa.prototype, "id_tarefa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tarefa.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tarefa.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Evento_1.Evento, evento => evento.tarefas),
    __metadata("design:type", Evento_1.Evento)
], Tarefa.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Tecnico_1.Tecnico, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Tarefa.prototype, "tecnicos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Componente_1.Componente, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Tarefa.prototype, "componentes", void 0);
Tarefa = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Evento_1.Evento, Array, Array])
], Tarefa);
exports.Tarefa = Tarefa;
//# sourceMappingURL=Tarefa.js.map