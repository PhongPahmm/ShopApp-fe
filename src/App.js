import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/auth/Login";
import HomePage from "./components/home/HomePage";
import Product from "./components/Product";
import Favorite from "./components/Favorite";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">E-commerce</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorite" className="nav-link">Favorites</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light me-2" onClick={() => navigate('/login')}>Log in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 Ecommerce. All rights reserved.</p>
      <p><NavLink to="/privacy" className="text-white">Privacy Policy</NavLink> | <NavLink to="/terms" className="text-white">Terms of Service</NavLink></p>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
