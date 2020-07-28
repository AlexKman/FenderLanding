import React from "react";
import { Card, Button } from "react-bootstrap";
import lead from "../assets/rsz_lead.jpg";

export const LeadCard = () => (
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" id="guitarcard" src={lead} />
      <Card.Body>
        <Card.Title>Fender Lead</Card.Title>
        <Card.Text>Fresh creative era in Fender’s history</Card.Text>
        <Button variant="primary">Shop all</Button>
      </Card.Body>
    </Card>
  </div>
);
