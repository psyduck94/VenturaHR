import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm'

export default class RelationPublishedJobs1604844219969 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('users', 'id', new TableColumn({
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      default: 'uuid_generate_v4()',
    }))

    await queryRunner.addColumn('job_vacancies', new TableColumn({
      name: 'companyId',
      type: 'uuid',
      isNullable: true,
    }))
    await queryRunner.createForeignKey('job_vacancies', new TableForeignKey({
      columnNames: ['companyId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('users', 'id', new TableColumn({
      name: 'id',
      type: 'varchar',
      generationStrategy: 'uuid',
      isPrimary: true,
      default: 'uuid_generate_v4()',
    }))
    await queryRunner.dropColumn('job_vacancies', 'companyId')
    await queryRunner.dropForeignKey('job_vacancies', 'companyId')
  }
}
