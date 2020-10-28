import { MigrationInterface, QueryRunner } from 'typeorm'

export default class RenameJobVacancyForeignKey1603908962481 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('criteria', 'job_vacancy_id', 'jobVacancyId')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('criteria', 'jobVacancyId', 'job_vacancy_id')
  }
}
