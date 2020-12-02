import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm'

export default class CreateCriteriaAnswer1606836035028 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'criteria_answer',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'criteriaId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'pmd',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'weight',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'jobVacancyAnswerId',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    )

    await queryRunner.createForeignKey('criteria_answer', new TableForeignKey({
      columnNames: ['criteriaId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'criteria',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('criteria_answer', 'criteriaId')
    await queryRunner.dropTable('criteria_answer')
  }
}
