import React from "react";
import { Card } from "react-bootstrap";

export default function PurchaseTotal({
  subtotal,
  gst,
  discount,
  grand_total,
  is_order = false,
}) {
  return (
    <Card.Body className="px-4 mb-5">
      <div className="d-flex justify-content-between py-1 text-secondary">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="d-flex justify-content-between py-1 text-secondary">
        <span>GST</span>
        <span>${gst}</span>
      </div>
      {((is_order && discount > 0) || !is_order) && (
        <div className="d-flex justify-content-between py-1 text-dark">
          <span>Discount</span>
          <h6>- ${discount}</h6>
        </div>
      )}
      <div className="d-flex justify-content-between py-1 fw-bold">
        <h6>Grand Total</h6>
        <h6>${grand_total}</h6>
      </div>
    </Card.Body>
  );
}
