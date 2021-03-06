import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateJobVacancies1602166924213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'job_vacancies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'companyLogo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'companyName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'companyDescription',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'contractType',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'contractDuration',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'criteriaList',
            type: 'varchar',
            isArray: true,
            isNullable: false,
          },
          {
            name: 'closingDate',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('job_vacancies')
  }
}
