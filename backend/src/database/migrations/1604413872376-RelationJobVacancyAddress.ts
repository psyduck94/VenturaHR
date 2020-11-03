import {
  MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey, TreeRepository,
} from 'typeorm'

export default class RelationJobVacancyAddress1604413872376 implements MigrationInterface {
    name = 'RelationJobVacancyAddress1604413872376'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('job_vacancies', 'city')
      await queryRunner.dropColumn('job_vacancies', 'state')
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
            {
              name: 'job_vacancy_id',
              type: 'uuid',
              isNullable: false,
            },
          ],
        }),
      )

      await queryRunner.createForeignKey('addresses', new TableForeignKey({
        columnNames: ['job_vacancy_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'job_vacancies',
        onDelete: 'SET NULL',
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('job_vacancies', new TableColumn({
        name: 'city',
        type: 'varchar',
        isNullable: false,
      }))
      await queryRunner.addColumn('job_vacancies', new TableColumn({
        name: 'state',
        type: 'varchar',
        isNullable: false,
      }))
      await queryRunner.dropTable('addresses', true, true)
    }
}
