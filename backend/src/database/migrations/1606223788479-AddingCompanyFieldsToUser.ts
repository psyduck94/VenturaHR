import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class AddingCompanyFieldsToUser1606223788479 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'companyDescription',
      type: 'varchar',
      isNullable: true,
    }))

    await queryRunner.addColumn('users', new TableColumn({
      name: 'companyLogo',
      type: 'varchar',
      isNullable: true,
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'companyDescription')
    await queryRunner.dropColumn('users', 'companyLogo')
  }
}
