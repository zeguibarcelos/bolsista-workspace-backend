import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1682565721298 implements MigrationInterface {
    name = 'CriaTabelas1682565721298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`localidade\` (\`id_localidade\` int NOT NULL AUTO_INCREMENT, \`descricao\` varchar(255) NOT NULL, PRIMARY KEY (\`id_localidade\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`componente\` (\`id_componente\` int NOT NULL AUTO_INCREMENT, \`descricao\` varchar(255) NOT NULL, \`localidadeIdLocalidade\` int NULL, PRIMARY KEY (\`id_componente\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tecnico\` (\`matricula\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, PRIMARY KEY (\`matricula\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tarefa\` (\`id_tarefa\` int NOT NULL AUTO_INCREMENT, \`descricao\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`eventoIdEvento\` int NULL, PRIMARY KEY (\`id_tarefa\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`evento\` (\`id_evento\` int NOT NULL AUTO_INCREMENT, \`prioridade\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`tipo\` varchar(255) NOT NULL, \`categoria\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`data_hora_inicio\` datetime NOT NULL, \`data_hora_fim\` datetime NOT NULL, PRIMARY KEY (\`id_evento\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tarefa_tecnicos_tecnico\` (\`tarefaIdTarefa\` int NOT NULL, \`tecnicoMatricula\` int NOT NULL, INDEX \`IDX_a8a232cb2e74d6feee3ed3315a\` (\`tarefaIdTarefa\`), INDEX \`IDX_c3c249215564da4c0e1a366fe5\` (\`tecnicoMatricula\`), PRIMARY KEY (\`tarefaIdTarefa\`, \`tecnicoMatricula\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tarefa_componentes_componente\` (\`tarefaIdTarefa\` int NOT NULL, \`componenteIdComponente\` int NOT NULL, INDEX \`IDX_e1bac89ff83818a4c05d8a5733\` (\`tarefaIdTarefa\`), INDEX \`IDX_ee0d01560593c167fb7c3983f9\` (\`componenteIdComponente\`), PRIMARY KEY (\`tarefaIdTarefa\`, \`componenteIdComponente\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`componente\` ADD CONSTRAINT \`FK_166dceea6be88dff9b53051d8fd\` FOREIGN KEY (\`localidadeIdLocalidade\`) REFERENCES \`localidade\`(\`id_localidade\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tarefa\` ADD CONSTRAINT \`FK_4e78d7eb2b4d8fed11e0c004543\` FOREIGN KEY (\`eventoIdEvento\`) REFERENCES \`evento\`(\`id_evento\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tarefa_tecnicos_tecnico\` ADD CONSTRAINT \`FK_a8a232cb2e74d6feee3ed3315a3\` FOREIGN KEY (\`tarefaIdTarefa\`) REFERENCES \`tarefa\`(\`id_tarefa\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tarefa_tecnicos_tecnico\` ADD CONSTRAINT \`FK_c3c249215564da4c0e1a366fe59\` FOREIGN KEY (\`tecnicoMatricula\`) REFERENCES \`tecnico\`(\`matricula\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tarefa_componentes_componente\` ADD CONSTRAINT \`FK_e1bac89ff83818a4c05d8a57338\` FOREIGN KEY (\`tarefaIdTarefa\`) REFERENCES \`tarefa\`(\`id_tarefa\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tarefa_componentes_componente\` ADD CONSTRAINT \`FK_ee0d01560593c167fb7c3983f97\` FOREIGN KEY (\`componenteIdComponente\`) REFERENCES \`componente\`(\`id_componente\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tarefa_componentes_componente\` DROP FOREIGN KEY \`FK_ee0d01560593c167fb7c3983f97\``);
        await queryRunner.query(`ALTER TABLE \`tarefa_componentes_componente\` DROP FOREIGN KEY \`FK_e1bac89ff83818a4c05d8a57338\``);
        await queryRunner.query(`ALTER TABLE \`tarefa_tecnicos_tecnico\` DROP FOREIGN KEY \`FK_c3c249215564da4c0e1a366fe59\``);
        await queryRunner.query(`ALTER TABLE \`tarefa_tecnicos_tecnico\` DROP FOREIGN KEY \`FK_a8a232cb2e74d6feee3ed3315a3\``);
        await queryRunner.query(`ALTER TABLE \`tarefa\` DROP FOREIGN KEY \`FK_4e78d7eb2b4d8fed11e0c004543\``);
        await queryRunner.query(`ALTER TABLE \`componente\` DROP FOREIGN KEY \`FK_166dceea6be88dff9b53051d8fd\``);
        await queryRunner.query(`DROP INDEX \`IDX_ee0d01560593c167fb7c3983f9\` ON \`tarefa_componentes_componente\``);
        await queryRunner.query(`DROP INDEX \`IDX_e1bac89ff83818a4c05d8a5733\` ON \`tarefa_componentes_componente\``);
        await queryRunner.query(`DROP TABLE \`tarefa_componentes_componente\``);
        await queryRunner.query(`DROP INDEX \`IDX_c3c249215564da4c0e1a366fe5\` ON \`tarefa_tecnicos_tecnico\``);
        await queryRunner.query(`DROP INDEX \`IDX_a8a232cb2e74d6feee3ed3315a\` ON \`tarefa_tecnicos_tecnico\``);
        await queryRunner.query(`DROP TABLE \`tarefa_tecnicos_tecnico\``);
        await queryRunner.query(`DROP TABLE \`evento\``);
        await queryRunner.query(`DROP TABLE \`tarefa\``);
        await queryRunner.query(`DROP TABLE \`tecnico\``);
        await queryRunner.query(`DROP TABLE \`componente\``);
        await queryRunner.query(`DROP TABLE \`localidade\``);
    }

}
