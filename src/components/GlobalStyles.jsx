import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    a{
        text-decoration:none;
        color:inherit;
        font-family: 'Roboto', sans-serif;
        font-size:15px;
    }
    *{
        box-sizing:border-box;
          margin: 0;
    }
    body{
        font-family: 'Roboto', sans-serif;
        padding-top:15px;
    }
    p{
      margin: 0;
    }


`;


export default GlobalStyles;
