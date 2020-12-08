import styled from 'styled-components'

export const Header = styled.header`
    padding: 10px 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2eeea;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease 0s;
    }

    svg {
        margin-right: 5px;
    }

    a:hover {
        color: #666;
    }

`

export const CandidateContainer = styled.div`
    padding: 10px 15%;

    h1 {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    table {
        border-collapse: collapse;
        margin-top: 16px;
        margin-bottom: 16px;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
`
