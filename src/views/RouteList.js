import React from "react";
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RedirectHome, RequireAuth } from "../hooks/useAuth";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import Checkout from "./orders/Checkout";
import Order from "./orders/Order";

export default function RouteList() {
  const user = null;

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route
        exact
        path="/checkout/:id"
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }
      />

      <Route
        exact
        path="/order/:id"
        element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        }
      />

      <Route
        exact
        path="/login"
        element={
          <RedirectHome>
            <Login />
          </RedirectHome>
        }
      />

      {/* NotFound */}
      <Route default element={<NotFound />} />
    </Routes>
  );
}
