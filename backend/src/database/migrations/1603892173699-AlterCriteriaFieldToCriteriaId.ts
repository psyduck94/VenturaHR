import {
  MigrationInterface, PrimaryGeneratedColumn, QueryRunner, Table, TableColumn, TableForeignKey,
} from 'typeorm'

/* Migration que representa a alteração do campo de critérios para um id */

export default class AlterCriteriaFieldToCriteriaId1603892173699 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('job_vacancies', 'criteriaList')
    await queryRunner.addColumn('criteria', new TableColumn({
      name: 'job_vacancy_id',
      type: 'uuid',
      isNullable: false,
    }))

    await queryRunner.createForeignKey('job_vacancies', new TableForeignKey({
      name: 'JobVacancyId',
      columnNames: ['job_vacancy_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'job_vacancies',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('criteria', 'JobVacancyId')
    await queryRunner.dropColumn('criteria', 'job_vacancy_id')
    await queryRunner.addColumn('job_vacancies', new TableColumn({
      name: 'criteriaList',
      type: 'varchar',
      isArray: true,
      isNullable: false,
    }))
  }
}
