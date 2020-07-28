import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export const TeleCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        id="guitarcard"
        src={
          "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0110133850_gtr_frt_001_rl.jpg"
        }
      />
      <Card.Body>
        <Card.Title>Fender Telecaster</Card.Title>
        <Card.Text>Bold, innovative, versatile and rugged</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
