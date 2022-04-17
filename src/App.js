import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Login from "./views/Login";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Checkout from "./views/orders/Checkout";
import Order from "./views/orders/Order";
import RouteList from "./views/RouteList";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    // <AuthProvider>
    <Router>
      <div className="App">
        <RouteList />
      </div>
    </Router>
    // </AuthProvider>
  );
}

export default App;
