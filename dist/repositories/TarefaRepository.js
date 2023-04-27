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
exports.TarefaRepository = void 0;
const Tarefa_1 = require("../entities/Tarefa");
class TarefaRepository {
    constructor(manager) {
        this.create = (teste) => __awaiter(this, void 0, void 0, function* () {
            const newTarefa = yield this.manager.save(Tarefa_1.Tarefa, teste);
            return newTarefa;
        });
        this.update = (id, tarefa) => __awaiter(this, void 0, void 0, function* () {
            yield this.manager.update(Tarefa_1.Tarefa, id, tarefa);
            const updatedTarefa = yield this.manager.findOneOrFail(Tarefa_1.Tarefa, {
                where: {
                    id_tarefa: id,
                },
            });
            return updatedTarefa;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const tarefa = yield this.manager.findOneOrFail(Tarefa_1.Tarefa, {
                where: {
                    id_tarefa: id,
                },
            });
            return tarefa;
        });
        this.findByEventoId = (eventoId) => __awaiter(this, void 0, void 0, function* () {
            const tarefas = yield this.manager.query(`
    SELECT 
      t.id_tarefa,
      t.descricao,
      t.status,
      (
        SELECT 
          JSON_ARRAYAGG(
            JSON_OBJECT('id_componente', comp.id_componente, 'descricao', comp.descricao)
          )
        FROM tarefa_componentes_componente tc
        LEFT JOIN componente comp ON comp.id_componente = tc.componenteIdComponente
        WHERE tc.tarefaIdTarefa = t.id_tarefa
      ) AS componentes,
      (
        SELECT 
          JSON_ARRAYAGG(
            JSON_OBJECT('matricula', tec.matricula, 'nome', tec.nome)
          )
        FROM tarefa_tecnicos_tecnico tt
        LEFT JOIN tecnico tec ON tec.matricula = tt.tecnicoMatricula
        WHERE tt.tarefaIdTarefa = t.id_tarefa
      ) AS tecnicos
    FROM tarefa t
    WHERE t.eventoIdEvento = ?
  `, [eventoId]);
            // Transformar os resultados em objetos Tarefa
            return tarefas.map((tarefa) => (Object.assign(Object.assign({}, tarefa), { tecnicos: tarefa.tecnicos ? JSON.parse(`${tarefa.tecnicos}`) : [], componentes: tarefa.componentes
                    ? JSON.parse(`${tarefa.componentes}`)
                    : [] })));
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const tarefas = yield this.manager.query("select * from tarefa");
            return tarefas;
        });
        this.countAll = () => __awaiter(this, void 0, void 0, function* () {
            const tarefas = yield this.manager
                .query(`SELECT l.descricao as localidade, COUNT(DISTINCT e.id_evento) as quantidade_eventos
    FROM localidade l
    INNER JOIN localidade a ON l.id_localidade = a.id_localidade
    INNER JOIN componente c ON a.id_localidade = c.localidadeIdLocalidade 
    INNER JOIN tarefa_componentes_componente tc ON c.id_componente = tc.componenteIdComponente 
    INNER JOIN tarefa t ON tc.tarefaIdTarefa  = t.id_tarefa
    INNER JOIN evento e ON t.eventoIdEvento  = e.id_evento
    GROUP BY l.descricao`);
            return tarefas;
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.delete(Tarefa_1.Tarefa, id);
            return result.affected === 1;
        });
        this.manager = manager;
    }
}
exports.TarefaRepository = TarefaRepository;
//# sourceMappingURL=TarefaRepository.js.map