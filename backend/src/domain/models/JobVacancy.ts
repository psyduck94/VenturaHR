import {
  Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne,
} from 'typeorm'
import Address from './Address'

import Criteria from './Criteria'

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

  @OneToMany(type => Criteria, criteria => criteria.jobVacancy, { eager: true })
  @JoinColumn({ name: 'criteria' })
  criteriaList: Criteria[]
}

export default JobVacancy
