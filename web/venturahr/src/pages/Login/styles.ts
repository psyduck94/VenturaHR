import styled from 'styled-components'
import backgroundImage from '../../assets/login_background.jpg'
import { shade } from 'polished'

/* Classe responsável pela estilização dos componentes */

export const Container = styled.div`
    background-color: #FFF;
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }

    h2 {
        margin-bottom: 24px;
    }

    input {
        background: #ededed;
        border-radius: 10px;
        border: 2px solid #ededed;
        padding: 16px;
        width: 100%;

        & + input {
            margin-top: 8px;
        }
    }

    button {
        height: 56px;
        border-radius: 10px;
        border: 2px solid #e5340a;
        padding: 16px;
        width: 100%;
        font-weight: 500;
        color: #FFF;
        margin-top: 16px;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#e5340a')};
        }
    }

    a {
        display: block;
        margin-top: 32px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#FFF')}
        }
    }

    > a {
        display: block;
        color: #e5340a;
        margin-top: 32px;
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