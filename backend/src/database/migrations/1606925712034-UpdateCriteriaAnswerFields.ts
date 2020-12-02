import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class UpdateCriteriaAnswerFields1606925712034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('criteria_answer', 'pmd')
    await queryRunner.dropColumn('criteria_answer', 'weight')
    await queryRunner.addColumn('criteria_answer', new TableColumn({
      name: 'selfEvaluation',
      type: 'integer',
      isNullable: false,
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('criteria_answer', 'selfEvaluation')
    await queryRunner.addColumn('criteria_answer', new TableColumn({
      name: 'pmd',
      type: 'integer',
      isNullable: false,
    }))

    await queryRunner.addColumn('criteria_answer', new TableColumn({
      name: 'weight',
      type: 'integer',
      isNullable: false,
    }))
  }
}
