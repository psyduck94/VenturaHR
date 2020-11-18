/* Classe que representa o service de criação de usuário */

import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import AccountType from '../domain/enums/AccountType'
import User from '../domain/models/User'

interface Request {
  accountType: AccountType
  name: string
  email: string
  password: string
  phone: string
  state: string
  city: string
  cpf: string
  cnpj: string
}

class CreateUserService {
  async execute({
    accountType,
    name,
    email,
    password,
    phone,
    state,
    city,
    cpf,
    cnpj,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User)
    const checkIfUserExists = await usersRepository.findOne(
      { where: { email } },
    )

    if (checkIfUserExists) throw new Error('Endereço de e-mail já cadastrado')

    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      accountType,
      name,
      email,
      password: hashedPassword,
      phone,
      state,
      city,
      cpf,
      cnpj,
    })

    await usersRepository.save(user)
    return user
  }
}

export default CreateUserService
