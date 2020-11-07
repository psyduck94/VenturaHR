import styled, { css } from 'styled-components'

/* Arquivo de estilização do componente Input */

interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
}

export const Container = styled.div<ContainerProps>`

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

    ${(props) =>
     props.isFocused &&
      css`
        color: #e5340a;
        border-color: #e5340a;
    `}

    ${(props) =>
     props.isFilled &&
      css`
        color: #e5340a;
    `}

    input {
        flex: 1;
        border: 0;
        background: transparent;
    }

    svg {
        margin-right: 16px;
    }

`
