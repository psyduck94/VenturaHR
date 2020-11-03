import {
  Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm'
import JobVacancy from './JobVacancy'

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  country: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  streetName: string

  @OneToOne(type => JobVacancy, jobVacancy => jobVacancy.address)
  jobVacancy: JobVacancy
}

export default Address
