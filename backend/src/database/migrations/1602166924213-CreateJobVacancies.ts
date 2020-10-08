import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateJobVacancies1602166924213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'job_vacancies',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'company_name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'contractType',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'criteriaList',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'closing_date',
            type: 'timestamp with time zone',
            isNullable: false
          }
        ]
      }
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('job_vacancies')
  }
}
