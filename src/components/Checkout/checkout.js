import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 2rem;

  display: flex;

  div.checkoutProducts {
    width: 60%;
    height: max-content;

    margin-right: 1rem;
    padding: 2rem;

    background-color: #ffffff;
  }

  div.checkoutProducts > div:first-child {
    display: flex;
    align-items: center;
  }

  div.checkoutProducts > div:first-child > h2 {
    text-transform: uppercase
  }

  div.checkoutTotal {
    width: 30%;
    height: 50%;

    position: fixed;
    right: 2rem;

    padding: 2rem;

    background-color: #ffffff;
  }

  div.checkoutTotal > button {
    width: 100%;

    padding: 1.2rem 1rem;

    border: none;
    background-color: #e9a842;

    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;
  }

  @media screen and (max-width: 980px) {
    flex-direction: column;

    div.checkoutProducts {
      width: 100%;

      margin-bottom: auto;
    }

    div.checkoutTotal {
      width: 100%;

      position: unset;
      bottom: unset;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;
