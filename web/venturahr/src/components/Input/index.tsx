import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'

/* Arquivo que representa o componente Input */


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
    return (
        <Container>
        <Icon size={20} />
            <input {...rest} />
        </Container>
    )
}

export default Input