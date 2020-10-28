import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm'

// eslint-disable-next-line max-len
export default class AddJobVacancyReferenceKeyToCriteriaTable1603904991937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('criteria', new TableColumn({
      name: 'job_vacancy_id',
      type: 'uuid',
      isNullable: false,
    }))

    await queryRunner.createForeignKey('criteria', new TableForeignKey({
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
  }
}
