import React, { useEffect, useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { PurchaseCard } from "../../components/PurchaseCard";
import PurchaseHead from "../../components/PurchaseHead";
import PurchaseTotal from "../../components/PurchaseTotal";
import useAxios from "../../hooks/useAxios";
import useFetch from "../../hooks/useFetch";
import { useInput } from "../../hooks/useInput";

export default function Checkout() {
  const params = useParams();
  const navigate = useNavigate();

  //Get Data
  const { data: pack, isLoading } = useFetch(`/api/packages/${params.id}`);

  //Discount
  const [discount, setDiscount] = useState(0);
  const coupon = useInput("");

  const applyCoupon = async (e) => {
    e.preventDefault();
    if (coupon.value) {
      const { data } = await api.post("/api/coupons/check", {
        coupon: coupon.value,
      });

      if (data.error_code === 0) {
        setDiscount(data.data.amount);
      }
    }
  };

  //API Data
  const token = useSelector((state) => state.persist.user.token);
  const api = useAxios(token);

  //PayNow
  const payNow = async (e) => {
    e.preventDefault();
    const body = {
      package_id: params.id,
      discount: discount,
      gst: pack.data.gst,
      total: pack.data.grand_total - discount,
    };

    try {
      const { data } = await api.post("/api/orders/create", body);
      console.log(data.data);
      navigate(`/order/${data.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container checkout mb-5">
      <div className="row my-5">
        <h1 className="text-uppercase display-6">
          Class Pack Purchase Preview
        </h1>
        {isLoading && <div>Loading...</div>}

        {pack && (
          <Card className="purchase-card">
            <Card.Body className="pt-5">
              <Card.Title>You have selected:</Card.Title>
              <div className="d-flex justify-content-between mt-5">
                <div>
                  <PurchaseHead
                    credit={pack.data.total_credit}
                    name={pack.data.pack_name}
                    note={pack.data.note}
                  />

                  {/* Discount */}
                  <div className="discount mt-3 px-3">
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="PromoCode"
                        aria-label="PromoCode"
                        aria-describedby="basic-addon2"
                        value={coupon.value}
                        onChange={coupon.onChange}
                      />
                      <Button
                        variant="primary"
                        className="px-4 py-2"
                        id="button-addon2"
                        onClick={applyCoupon}
                      >
                        APPLY
                      </Button>
                    </InputGroup>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">${pack.data.pack_price}</h5>
                </div>
              </div>
            </Card.Body>
            <hr />
            <PurchaseTotal
              subtotal={pack.data.subtotal}
              discount={discount}
              gst={pack.data.gst}
              grand_total={pack.data.grand_total - discount}
            />
          </Card>
        )}

        <span className="text-dark my-3">
          Please read all <a href="#terms">Terms & Conditions</a> before
          purchasing yours YM Class or Class Pack.
        </span>

        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <NavLink to="/"> {`<- Back`} </NavLink>
          </div>

          <Button
            variant="primary"
            className="px-5 py-3 rounded-pill text-uppercase"
            id="button-addon2 "
            onClick={payNow}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
