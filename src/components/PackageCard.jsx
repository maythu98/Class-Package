import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CircleText from "./CircleText";

export const PackageCard = (props) => {
  const { pack } = props;
  console.log(pack);
  return (
    <NavLink to={`/checkout/${pack.id}`} className="">
      <Card className="package-card">
        <div className="triangle">
          <div></div>
        </div>
        <Card.Body>
          <div className="tag">
            <button className="btn btn-dark px-5 text-uppercase">
              {pack.tag_name}
            </button>
          </div>
          <div className="title text-center my-4 px-5">
            <Card.Title>{pack.pack_name}</Card.Title>
            <CircleText text={pack.total_credit} />
          </div>
          <div className="text-center my-4 px-5">
            <Card.Text className="my-3 mx-2">{pack.note}</Card.Text>

            <div className="mt-5">
              <h5 className="fw-bold">${pack.pack_price}</h5>
              <span className="text-secondary">
                ${pack.estimate_price} per class!
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </NavLink>
  );
};
