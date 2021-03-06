import React from "react";
import { Card, Button } from "react-bootstrap";
import jazz from "../assets/rsz_jazzmaster1.jpg";

export const JazzCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" id="guitarcard" src={jazz} />
      <Card.Body>
        <Card.Title>Fender Jazzmaster</Card.Title>
        <Card.Text>Sleek, elegant style. The primary offset choice</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
