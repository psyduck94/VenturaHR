import {
  MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey,
} from 'typeorm'

// eslint-disable-next-line max-len
export default class RefactoringJobVacancyAddressForeignKey1604418151018 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses')
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: true,
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
            name: 'streetName',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    )

    await queryRunner.addColumn('job_vacancies', new TableColumn({
      name: 'addressId',
      type: 'uuid',
      isNullable: false,
    }))

    await queryRunner.createForeignKey('job_vacancies', new TableForeignKey({
      columnNames: ['addressId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'addresses',
      onDelete: 'SET NULL',
      onUpdate: 'SET NULL',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('job_vacancies', 'addressId')
    await queryRunner.createForeignKey('addresses', new TableForeignKey({
      columnNames: ['job_vacancy_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'job_vacancies',
      onDelete: 'SET NULL',
    }))
  }
}
