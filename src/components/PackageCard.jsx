import React from "react";
import { Card } from "react-bootstrap";

export const PackageCard = () => {
  return (
    <Card className="package-card">
      <Card.Body>
        <div className="tag">
          <button className="btn btn-dark px-5">POPULAR</button>
        </div>
        <div className="title text-center my-4 px-5">
          <Card.Title>10 Class Pack</Card.Title>
          <div className="py-3">
            <span>10</span>
          </div>

          <Card.Text className="my-5 mx-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis.
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};
