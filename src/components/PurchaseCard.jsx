import React from "react";
import { Card } from "react-bootstrap";
import PurchaseHead from "./PurchaseHead";
import PurchaseTotal from "./PurchaseTotal";

export const PurchaseCard = ({ pack, discount, total }) => {
  console.log(pack);

  return (
    <>
      <Card className="purchase-card">
        <Card.Body className="pt-5">
          <Card.Title>You have selected:</Card.Title>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div>
              <PurchaseHead
                credit={pack.total_credit}
                name={pack.pack_name}
                note={pack.note}
              />
            </div>
            <div>
              <h5 className="fw-bold">${pack.pack_price}</h5>
            </div>
          </div>
        </Card.Body>
        <hr />
        <PurchaseTotal
          subtotal={pack.subtotal}
          discount={discount ?? null}
          gst={pack.gst}
          grand_total={total}
          is_order={true}
        />
      </Card>
    </>
  );
};
