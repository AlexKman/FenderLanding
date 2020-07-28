import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export const StratCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0117442803_gtr_frt_001_rr.jpg"
        }
      />
      <Card.Body>
        <Card.Title>Fender Stratocaster</Card.Title>
        <Card.Text>The ultimate in precision, performance and tone</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
