import { createGlobalStyle } from "styled-components"
import breackpoints from "./ui/breackpoints"

const GlobalStyles = createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
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

    .container{
        width: 100%;
        margin: 0 auto;
        padding: 0 30px;
        
        ${breackpoints.md}{
            padding: 0 20px;

        }
    }

    .mt20{
        margin-top: 20px;
    }

    .mb20{
        margin-bottom: 20px;
    }

    .mr20{
        margin-right: 20px;
    }

    .df{
        display: flex;
    }

    .jcsb{
        justify-content: space-between;
    }

    .jcfe{
        justify-content: flex-end;
    }

    .aic{
        align-items: center;
    }

    .posr{
        position: relative;
    }

    .posa{

    }
`

export default GlobalStyles
