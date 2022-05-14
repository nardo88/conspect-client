import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }

    ul, ol {
        list-style: none;
    }

    button{
        cursor: pointer;
        outline: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

`

export default GlobalStyles