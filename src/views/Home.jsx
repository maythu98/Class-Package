import React, { Component } from "react";
import { PackageCard } from "../components/PackageCard";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row py-3">
          <div className="col">
            <PackageCard />
          </div>
          <div className="col">
            <PackageCard />
          </div>
          <div className="col">
            <PackageCard />
          </div>
        </div>

        <div className="row py-3">
          <div className="col">
            <PackageCard />
          </div>
          <div className="col">
            <PackageCard />
          </div>
          <div className="col">
            <PackageCard />
          </div>
        </div>
      </div>
    );
  }
}
