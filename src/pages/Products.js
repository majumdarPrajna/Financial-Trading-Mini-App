import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="page">
      <h2>Investment Products</h2>
      {products.map((p) => (
        <div key={p._id} className="card">
          <h4>{p.name}</h4>
          <p>Category: {p.category}</p>
          <p>Price: ₹{p.price}</p>
          <p>Metric: {p.metric}</p>
        </div>
      ))}
    </div>
  );
}
