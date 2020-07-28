import React from "react";
import { Card, Button } from "react-bootstrap";
import jaguar from "../assets/rsz_jaguar.jpg";

export const JaguarCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" id="guitarcard" src={jaguar} />
      <Card.Body>
        <Card.Title>Fender Jaguar</Card.Title>
        <Card.Text>Sleek, elegant style. The primary offset choice</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
