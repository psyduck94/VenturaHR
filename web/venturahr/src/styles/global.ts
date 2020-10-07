import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
  background: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px Roboto, sans-serif;
}

h1 {
    color: #050931;
}

p {
    color: #232323
}

span {
    color: rgba(218, 58, 24, 1);
}

button {
    background-color: rgba(218, 58, 24, 1);
    color: #FFF;
    transition: all 0.3s ease 0s;
}

button:hover {
        background-color: rgba(218, 58, 24, 0.7);
    }

button, li, a {
    cursor: pointer;
    text-decoration: none;
    color: #232323
}


`
