import styled from "styled-components";
// ---------- Side bar Starts Here ----------
export const Nav = styled.nav`
  padding: 1rem 2rem;

  width: ${({ open }) => (open ? "404px" : "202px")};
  height: 100%;
  transition: width 0.4s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;

  img {
    width: ${({ open }) => (open ? "9rem" : "8rem")};
    transition: width 0.4s ease-in-out;
  }
`;

export const Row = styled.div`
  display: ${({ open }) => (open ? "inherit" : "none")};
  transition: display 0.4s ease-in-out;

  select {
    margin: 1rem 0.4rem;
    padding: 1.4rem 3rem 1.4rem 1.4rem;

    background-color: #f8f8f8;

    border: none;
    border-radius: 5px;

    appearance: none;

    background-image: url(https://www.crescorent.com/wp-content/uploads/2019/06/down-arrow-yellow.png);
    background-repeat: no-repeat;
    background-position: 80%;
    background-size: 8%;
  }
`;

export const SearchBar = styled.div`
  width: 80%;
  margin: 2rem 0;

  display: ${({ open }) => (open ? "inherit" : "none")};
  flex-direction: inherit;
  transition: display 0.4s ease-in-out;

  label {
    font-size: 12px;
  }

  input {
    padding: 1rem 2rem 1rem 0;
    font-size: 1.2rem;
    color: #e9a842;

    background-image: url(/images/icons/AmazonSearch.svg);
    background-repeat: no-repeat;
    background-position: 98%;
    background-size: 6%;

    border: none;
    border-bottom: 1px solid #ebecee;

    &::placeholder {
      font-size: 1.2rem;
      color: #dadada;
    }
  }
`;

// ---------- Cart Starts Here ----------
export const Cart = styled.div`
  width: 100%;

  margin-top: auto;

  display: ${({ open }) => (open ? "unset" : "flex")};
  flex-direction: ${({ open }) => (open ? "row" : "column-reverse")};
  align-items: ${({ open }) => (open ? "unset" : "center")};
  transition: flex-direction 0.4s ease-in-out;
`;

export const CartRow = styled.div`
  margin: 0 0 2rem 0;
  padding: 0 0.4rem;

  display: flex;
  justify-content: space-between;

  p {
    display: ${({ open }) => (open ? "unset" : "none")};
    color: #000;
  }

  span {
    display: inherit;
    align-items: center;

    color: #a3a3a3;

    cursor: pointer;
  }
`;

export const CartPrices = styled.div`
  padding: 2rem 2rem;

  display: flex;
  flex-direction: ${({ open }) => (open ? "row" : "column")};
  align-items: center;
  justify-content: space-between;

  background-color: ${({ open }) => (open ? "#f8f8f8" : "none")};
  transition: background-color 0.4s ease-in-out;

  div:first-child {
    display: inherit;
    flex-direction: ${({ open }) => (open ? "row" : "column")};
    align-items: center;
  }

  span.totalPrice {
    margin-left: 1rem;

    margin-top: ${({ open }) => (open ? "0" : "1rem")};
    margin-bottom: ${({ open }) => (open ? "0" : "1rem")};

    font-size: 1.2rem;
    font-weight: bold;
  }

  hr {
    margin: 2rem 0 0 0;
    display: ${({ open }) => (open ? "none" : "unset")};
    width: 100%;
    color: #f8f8f8;

    border: none;
    border-bottom: 2px solid #f8f8f8;
  }
`;
// ---------- Cart Ends Here ----------
// ---------- Side bar Ends Here ----------
