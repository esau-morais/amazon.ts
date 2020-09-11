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

  .MuiBadge-badge.MuiBadge-anchorOriginBottomRightRectangle.MuiBadge-colorPrimary {
    background-color: #e9a842
  }
`;

export default Global;
