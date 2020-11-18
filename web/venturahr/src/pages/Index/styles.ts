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
    background-color: #f2eeea;
    padding: 0 15%;
    padding-top: 50px;
    display: flex;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        max-width: 400px;
    }

    p {
        max-width: 310px;
        font-size: 14px;
        background-color: #efe7e6;
        border-color: #efe7e6;
        margin-bottom: 10px;
        padding: 5px 10px;
        border-radius: 10px;
        border-style: solid;
    }

    img {
        margin-left: auto;
        margin-bottom: auto;
    }
`

export const Form = styled.form`
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: 10px;

    input {
        flex: 1;
        height: 40px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
    }

    button {
        color: #FFF;
        width: 100px;
        border: 0;
        border-radius: 0 5px 5px 0;
    }
`

export const Tutorial = styled.img`
    display: flex;
    width: 60%;
    margin: 80px auto;
`

export const LatestJobs = styled.div`
    padding: 0 15%;
    margin-bottom: 50px;

    h1 {
        text-align: center;
        margin-bottom: 50px;
    }

    a {
        transition: all 0.3s ease 0s;
        margin: auto;
        margin-bottom: 15px;
        border-radius: 10px;
        width: 55%;
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

    div {
        margin-left: 16px;

        strong {
            color: #a3a3a3;
        }

        p {
            font-weight: 400;
            margin-top: 4px;
        }
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
    }


`

