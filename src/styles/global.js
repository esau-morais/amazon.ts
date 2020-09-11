import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    src: url("/fonts/AmazonEmber.ttf");
    font-family: AmazonEmber;
  }

  * {
    margin: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    font-family: AmazonEmber, Arial, sans-serif;
  }

  body, html, #root {
    width: 100%;
    height: 100%;
    background-color: #f8f9fb;
  }

  a {
    text-decoration: none;
  }
`;

export default Global;
