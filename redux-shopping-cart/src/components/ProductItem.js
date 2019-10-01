import React from "react";
import { Link } from "react-router-dom";

export default ({ product }) => {
  return (
    <div className="card">
      <li>
        <div className="card-image">
          <img src={require(`../assets/images/${product.image}`)}
            alt={product.title}
          />
        </div>

      <div>
      <span className="card-title">{product.title}</span>
      <b>Price:</b> {product.price}
      </div>

      <div>
      <Link to={`/product/${product.id}`}>Details</Link>
      </div>
      </li>
</div>
);
};
