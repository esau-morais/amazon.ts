import React from 'react';
// Components
import { Container, Back } from '../components/index';
import { ArrowBackRounded } from "@material-ui/icons";

export default function Checkout() {
  return (
    <Container>
      <Back to="/">
        <ArrowBackRounded />
      </Back>
    </Container>
  )
}
