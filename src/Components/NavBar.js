import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="nav">
      <Link to="/products">Products</Link>
      <Link to="/portfolio">Portfolio</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
