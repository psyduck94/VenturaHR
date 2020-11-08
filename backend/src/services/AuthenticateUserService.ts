/* Serviço de autenticação de usuário */

import { compareAsc } from 'date-fns'
import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import User from '../domain/models/User'

interface Response {
  user: User
  token: string
}

interface Request {
  email: string
  password: string
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({ where: { email } })
    if (!user) throw new Error('Incorrect credentials')

    const matchedPassword = await compare(password, user.password)
    if (!matchedPassword) throw new Error('Incorrect credentials')

    const token = sign({}, '2fea75c81a95743256f392d2159ec929', {
      subject: user.id,
      expiresIn: '1d',
    })

    return { user, token }
  }
}

export default AuthenticateUserService
