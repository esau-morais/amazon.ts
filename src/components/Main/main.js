import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;

  background-color: #f8f9fb;
`;

export const Img = styled.div`
  width: 100%;
  height: 60vh;
  background: url(https://icdn2.digitaltrends.com/image/digitaltrends/samsung-gear-vr-thumb-2-1200x630-c-ar1.91.jpg)
    no-repeat center fixed;
  background-size: cover;
`;

export const Row = styled.div`
  width: fit-content;

  padding: 2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-right: 1rem;
  }
`;

export const ProductsList = styled.div`
  margin: 0 2rem 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  div {
    margin: 1rem 0.4rem;
    padding: 1rem 1rem;
    background-color: #ffffff;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    color: #000;
  }

  span {
    color: #969696;
  }
`;
