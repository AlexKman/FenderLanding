import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #f9f9f9;
    border-bottom: 1px solid #e0e0e0;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand id="fender">
        <Nav.Item>
          <Nav.Link>
            <Link id="fender" to="/">
              Fender
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link>
          <Link to="/guitars">Guitars</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link>Basses</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link>Amps</Link>
        </Nav.Link>
      </Nav.Item>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
