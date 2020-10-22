import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm'
import AccountType from '../enums/AccountType'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  accountType: AccountType

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  phone: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  cpf: string

  @Column()
  cnpj: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default User
