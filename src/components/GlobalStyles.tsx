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

    .h20{
        height: 20px;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-50%)
        }

        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }
`

export default GlobalStyles