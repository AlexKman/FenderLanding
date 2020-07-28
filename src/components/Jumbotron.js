import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import fender from "../assets/fender.jpg";
import "../App.css";

const Styles = styled.div`
  .jumbotron {
    background: url(${fender}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: black;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 id="fender1">Fender</h1>
        <p id="header">You won't part with yours either</p>
      </Container>
    </Jumbo>
  </Styles>
);
