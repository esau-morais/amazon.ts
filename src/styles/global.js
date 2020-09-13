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
    overflow-x: hidden;

    background-color: #f8f9fb;
  }

  a {
    text-decoration: none;
  }
  /* Material-UI */
  .MuiBadge-badge.MuiBadge-anchorOriginBottomRightRectangle.MuiBadge-colorPrimary {
    background-color: #e9a842
  }
  /* Slick */
  .slick-dots {
    text-align: start;

    left: 4.5rem;
    bottom: 3.5rem;
  }

  .slick-dots li button:before {
    color: #fff;

    opacity: 1;
  }

  .slick-dots li.slick-active button:before {
    color: #fff;

    opacity: 1;

    border: 1px solid #E8A034;
    border-radius: 50%;
  }
`;

export default Global;
