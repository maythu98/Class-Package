import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PurchaseCard } from "../../components/PurchaseCard";
import useFetch from "../../hooks/useFetch";

export default function Order() {
  const params = useParams();

  //Get Data
  const { data, isLoading } = useFetch(`/api/orders/${params.id}`);

  console.log(data, params.id);

  return (
    <div className="container checkout mb-5">
      <div className="row my-5">
        <h1 className="text-uppercase display-6">
          Thank you!
          <br />
          You have successfully purchased a class pack!
        </h1>
        {isLoading && <div>Loading...</div>}
        {data && (
          <PurchaseCard
            pack={data.data.package}
            discount={data.data.discount}
            total={data.data.total}
          />
        )}
      </div>
    </div>
  );
}
