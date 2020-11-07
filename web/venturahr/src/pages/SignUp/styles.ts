import styled from 'styled-components'
import backgroundImage from '../../assets/sign_up_background.jpg'
import { shade } from 'polished'

/* Classe responsável pela estilização dos componentes */

export const Container = styled.div`
    background-color: #FFF;
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const RadioGroup = styled.div`
    margin-bottom: 16px;

    input[type="radio"] {
        margin: 0 10px;
        color: #ededed
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 10px 0;
        width: 340px;
        text-align: center;
    }

    h2 {
        margin-bottom: 24px;
    }

    a {
        display: block;
        margin-top: 32px;
        color: #e5340a;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#FFF')}
        }
    }

    > a {
        display: block;
        color: #e5340a;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
`
