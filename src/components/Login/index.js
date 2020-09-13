import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: url(/images/AmazonLogin.jpeg) no-repeat center;
    background-size: cover;

    padding-left: 180px;

    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 400px;
      height: fit-content;

      padding: 1.4rem 1rem;

      display: inherit;
      flex-direction: column;
      align-items: center;

      background: rgba(250, 250, 250, 0.25);
      backdrop-filter: saturate(180%) blur(20px);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    form > img {
      width: 10rem;
    }

    form > p {
      font-size: 1.2rem;
      text-transform: capitalize;
      color: #1f1f1f;

      margin-bottom: 2rem;
    }

    form > input {
      padding: 1rem 0rem 1rem 2rem;

      font-size: 1.2rem;
      color: #1d1d1d;

      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 2%;
      background-size: 6%;

      border: none;
      border-bottom: 1px solid #1d1d1d;

      &::placeholder {
        color: #1d1d1d;
      }
    }

    form > button {
      border: none;
      border-radius: 5rem;

      color: #ffffff;

      text-transform: uppercase;
      font-size: 1rem;

      cursor: pointer;
    }

    form > button.login {
      margin-top: 4rem;
      padding: 1.6rem 1.4rem;

      width: 80%;

      background-color: #ffad00;
    }

    form > span.separator {
      text-transform: uppercase;

      padding: 0.4rem 0;
    }

    form > button.register {
      padding: 1.2rem 1rem;

      width: 60%;

      background-color: #feb42f;
    }

    @media screen and (max-width: 980px) {
      width: 100%;

      padding-left: 60px;

      form:first-child > input {
	width: 100%;
      }
    }
`;
