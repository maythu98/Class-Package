import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Login from "./views/Login";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
