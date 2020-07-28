import React from "react";
import { Card, Button } from "react-bootstrap";
import mustang from "../assets/rsz_mustang.jpg";

export const MustangCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" id="guitarcard" src={mustang} />
      <Card.Body>
        <Card.Title>Fender Mustang</Card.Title>
        <Card.Text>Sound and style for the trend setters</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
