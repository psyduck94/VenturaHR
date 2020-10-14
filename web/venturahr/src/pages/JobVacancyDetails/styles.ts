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

export const JobVacancyInfo = styled.section`
    margin-top: 50px;
    padding: 0 15%;

    header {
        display: flex;
        align-items: center;
    }

    img {
        width: 80px;
        height: 80px;
    }

    div {
        margin-left: 24px;

        strong {
            font-size: 30px;
        }

        p {
            font-size: 16px;
        }
    }

    ul {
        margin-bottom: 40px;
    }

    ul li {
        margin-top: 10px;
        margin-left: 30px;
    }

    h2 {
        margin-top: 30px;
    }

    p {
        margin-top: 10px;
    }

`

export const Button = styled.button`
        margin-top: 40px;
        width: 50%;
        text-align: center;
        padding: 9px 25px;
        color: #FFF;
        border: none;
        border-radius: 10px;
`
