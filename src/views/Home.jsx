import React from "react";
import { PackageCard } from "../components/PackageCard";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data, isLoading } = useFetch("/api/packages");

  // console.log("Data", data["data"], isLoading);
  // console.log(data.total_page, data.pack_list);

  return (
    <div className="container">
      <div className="row py-3">
        {isLoading && "Loading....."}

        {data &&
          data.data.pack_list.map((pack) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 p-0" key={pack.id}>
                <PackageCard pack={pack} />
              </div>
            );
          })}

        {/* <div className="col-lg-4 col-md-6 col-sm-12 p-0">
          <PackageCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
          <PackageCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
          <PackageCard />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
          <PackageCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
          <PackageCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
          <PackageCard />
        </div> */}
      </div>
    </div>
  );
}
