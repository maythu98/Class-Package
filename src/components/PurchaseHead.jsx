import React from "react";
import { Card } from "react-bootstrap";
import CircleText from "./CircleText";

export default function PurchaseHead({ credit, name, note }) {
  return (
    <div className="d-flex align-items-center">
      <CircleText text={credit} />
      <div className="px-3">
        <Card.Title>{name}</Card.Title>
        <span className="text-secondary">{note}</span>
      </div>
    </div>
  );
}
