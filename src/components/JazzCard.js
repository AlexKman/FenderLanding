import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export const JazzCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0118050712_gtr_frt_001_rr.jpg"
        }
      />
      <Card.Body>
        <Card.Title>Fender Jazzmaster</Card.Title>
        <Card.Text>Sleek, elegant style. The primary offset choice</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
