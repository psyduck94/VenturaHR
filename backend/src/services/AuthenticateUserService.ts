import { compareAsc } from 'date-fns'
import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import User from '../domain/models/User'

interface Response {
  user: User
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

    return { user }
  }
}

export default AuthenticateUserService
