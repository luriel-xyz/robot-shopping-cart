/**
 * Main application component
 * Configures the routes and renders the Navbar and corresponding components based on the route
 */

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./styles/App.css";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
