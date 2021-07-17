import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:boerder-box;
    }
    html {
        margin: 0;
        padding: 0;
        font-size: 16px;
        height: 100%;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        height: 100%;
        background-color: #f7f7f7;
    }
`;


export default GlobalStyles;