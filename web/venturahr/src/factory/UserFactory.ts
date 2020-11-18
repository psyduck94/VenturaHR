import SignUpFormData from '../utils/SignUpFormData'

export default class UserFactory {

    static async create(data: SignUpFormData) {
        if (data.cpfOrCnpj.length <= 11) {
            return {
                accountType: data.accountType,
                name: data.name,
                email: data.email,
                password: data.password,
                cpf: data.cpfOrCnpj,
                phone: data.phone,
                city: data.city,
                state: data.state,
            }
        } else {
            return {
                accountType: data.accountType,
                name: data.name,
                email: data.email,
                password: data.password,
                cnpj: data.cpfOrCnpj,
                phone: data.phone,
                city: data.city,
                state: data.state,
            }
        }
    }
}
