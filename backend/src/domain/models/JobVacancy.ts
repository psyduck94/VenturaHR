import {
  Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne, ManyToOne,
} from 'typeorm'
import Address from './Address'

import Criteria from './Criteria'
import JobVacancyAnswer from './JobVacancyAnswer'
import User from './User'

@Entity('job_vacancies')
class JobVacancy {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  companyLogo: string

  @Column()
  companyDescription: string

  @Column()
  companyName: string

  @OneToOne(type => Address, address => address.jobVacancy, { eager: true })
  @JoinColumn()
  address: Address

  @Column()
  contractType: string

  @Column()
  contractDuration: string

  @Column('timestamp with time zone')
  closingDate: Date

  @ManyToOne(type => User, user => user.publishedJobs)
  company: User

  @OneToOne(type => JobVacancyAnswer, jobVacancyAnswer => jobVacancyAnswer.jobVacancy)
  jobVacancyAnswer: JobVacancyAnswer

  @OneToMany(type => Criteria, criteria => criteria.jobVacancy, { eager: true })
  @JoinColumn({ name: 'criteria' })
  criteriaList: Criteria[]
}

export default JobVacancy
