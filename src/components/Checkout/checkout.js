import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 2rem;
  padding-left: calc(180px + 2rem);

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

  @media screen and (max-width: 980px) {
    padding-left: calc(2rem + 60px);
    margin-right: 0;

    flex-direction: column;

    div.checkoutProducts {
      width: 100%;

      margin-bottom: 2rem;
    }

    div.checkoutTotal {
      width: 100%;
      height: fit-content;

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
