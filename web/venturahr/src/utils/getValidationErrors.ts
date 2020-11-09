import { ValidationError } from 'yup'

/* Função para pegar erros de validação */

interface Errors {
    [key: string]: string
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {}
    err.inner.forEach(error => {
        validationErrors[error.path] = error.message
    })
    return validationErrors
}
