import { EntityRepository, Repository } from 'typeorm'
import JobVacancy from '../domain/models/JobVacancy'

@EntityRepository(JobVacancy)
class JobVacancyRepository extends Repository<JobVacancy> {
  jobVacancies: any

  public async findByClosingDate(date: Date): Promise<JobVacancy | null> {
    const jobVacancy = await this.findOne({
      where: { date },
    })
    return jobVacancy || null
  }
}

export default JobVacancyRepository
