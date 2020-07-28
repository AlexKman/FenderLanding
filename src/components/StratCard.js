import React from "react";
import { Card, Button } from "react-bootstrap";
import strat from "../assets/rsz_stratocaster1.jpg";

export const StratCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img id="guitarcard" variant="top" src={strat} />
      <Card.Body>
        <Card.Title>Fender Stratocaster</Card.Title>
        <Card.Text>The ultimate in precision, performance and tone</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
