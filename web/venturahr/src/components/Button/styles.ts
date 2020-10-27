import styled from 'styled-components'
import { shade } from 'polished'

/* Arquivo que representa a estilização do componente Input */

export const Container = styled.div`

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

`
