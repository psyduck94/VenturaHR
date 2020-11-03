import { MigrationInterface, QueryRunner } from 'typeorm'

export default class RenameAddressForeignKey1604415854470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('addresses', 'job_vacancy_id', 'jobVacancyId')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('addresses', 'jobVacancyId', 'job_vacancy_id')
  }
}
