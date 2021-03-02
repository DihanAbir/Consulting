import styled, { createGlobalStyle } from "styled-components";

const  GlobalStyle = createGlobalStyle`
*{
    box-sizzing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
}
`;


export const  Container = styled.div `
z-index: 1;
width: 100%;
margin: 0px auto;
padding: 50px;

@media screen and (max-width: 991px){
    padding: 30px;
}
`