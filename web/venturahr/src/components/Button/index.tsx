import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

/* Arquivo que representa o componente Button */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <Container>
            <button type="button" {...rest}>{children}</button>
        </Container>
    )
}

export default Button
