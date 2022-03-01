import "./App.css";
import Login from "./Components/Login.js";
import { Signup } from "./Components/Signup.js";
import { Home } from "./Components/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Router>
  );
}

export default App;
