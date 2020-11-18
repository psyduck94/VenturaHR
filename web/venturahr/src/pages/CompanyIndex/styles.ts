import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 15%;
    background-color: #f2eeea;

    img {
        cursor: pointer;
        margin-right: auto;
    }

    button {
        margin-left: 20px;
        padding: 9px 25px;
        color: #FFF;
        border: none;
        border-radius: 10px;
    }
`

export const NavBar = styled.nav`

    ul {
        list-style: none;
    }

    li {
        display: inline-block;
        padding: 0px 20px;
    }

    li a {
        transition: all 0.3s ease 0s;
    }

    li a:hover {
        color: #DA3A18
    }
`

export const MainContainer = styled.div`
    max-width: 100%;
    padding: 0 15%;
    padding-top: 50px;
    align-items: center;

    h1 {
        font-size: 2rem;
        max-width: 400px;
    }
`

export const JobVacancies = styled.div`
    max-width: 50%;

    h2 {
        color: #4f4f4f;
        margin-top: 32px;
        font-size: 1.5rem;
        margin-bottom: 16px;
    }

    a {
        transition: all 0.3s ease 0s;
        margin-bottom: 15px;
        border-radius: 10px;
        width: 80%;
        padding: 20px;
        text-decoration: none;

        display: flex;
        align-items: center;

        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    a:hover {
        transform: translateX(15px);
        margin-top: 10px;
    }

    .info {
        margin-left: 16px;

        strong {
            color: #a3a3a3;
        }

        p {
            font-weight: 400;
            margin-top: 4px;
        }
    }

    .button {
        max-width: 50%;
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
    }
`
