import styled from 'styled-components'

/* Arquivo de estilização do componente Input */

export const Container = styled.div`

    background: #ededed;
    border-radius: 10px;
    border: 2px solid #ededed;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
        }

input {
    flex: 1;
    border: 0;
    background: transparent;
    }

    svg {
        margin-right: 16px;
    }

`
