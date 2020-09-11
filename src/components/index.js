import styled from "styled-components";
// Inheritence
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${props => (props.primary ? "0" : "2rem 2rem")};

  width: 100%;
  overflow-y: auto;
`;

export const RouteLink = styled(Link)`
  font-size: 14px;
  color: #f69a11;
`;

export const Back = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;

    padding: 2rem;

    background-color: #ffffff;
    color: #000;

    border-radius: 100%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
`;
