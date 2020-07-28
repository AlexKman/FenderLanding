import React from "react";
import { Card, Button } from "react-bootstrap";
import tele from "../assets/rsz_1telecaster1.jpg";

export const TeleCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" id="guitarcard" src={tele} />
      <Card.Body>
        <Card.Title>Fender Telecaster</Card.Title>
        <Card.Text>Bold, innovative, versatile and rugged</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
