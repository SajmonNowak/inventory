import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap');;

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: "Lato", sans-serif;
    }
`;

export default GlobalStyle;
