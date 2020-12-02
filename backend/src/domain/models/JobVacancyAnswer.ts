/* eslint-disable max-len */
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import JobVacancy from './JobVacancy'
import User from './User'
import CriteriaAnswer from './CriteriaAnswer'

@Entity('job_vacancy_answer')
class JobVacancyAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(type => User, user => user.jobVacancyAnswer, { eager: true })
  @JoinColumn()
  candidate: User

  @OneToOne(type => JobVacancy, jobVacancy => jobVacancy.jobVacancyAnswer, { eager: true })
  @JoinColumn()
  jobVacancy: JobVacancy

  @OneToMany(type => CriteriaAnswer, criteriaAnswer => criteriaAnswer.jobVacancyAnswer, { eager: true })
  @JoinColumn()
  criteriaListAnswer: CriteriaAnswer[]
}

export default JobVacancyAnswer
