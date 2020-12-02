import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm'

export default class CreateJobVacancyAnswer1606838038162 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'job_vacancy_answer',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'candidateId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'jobVacancyId',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    )

    await queryRunner.createForeignKey('job_vacancy_answer', new TableForeignKey({
      columnNames: ['candidateId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'SET NULL',
    }))

    await queryRunner.createForeignKey('job_vacancy_answer', new TableForeignKey({
      columnNames: ['jobVacancyId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'job_vacancies',
      onDelete: 'SET NULL',
      onUpdate: 'SET NULL',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('job_vacancy_answer', 'candidateId')
    await queryRunner.dropForeignKey('job_vacancy_answer', 'jobVacancyId')
    await queryRunner.dropTable('job_vacancy_answer')
  }
}
