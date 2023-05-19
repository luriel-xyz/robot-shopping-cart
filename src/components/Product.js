import React from "react";
import { useSelector } from "react-redux";

// Component for rendering a single product item.
// Displays the product image, name, price, and an option to add/remove from cart.
// The `data` prop should contain the necessary information for the product.
// The `onAdd` prop should be a function to handle adding the product to the cart.
// The `onRemove` prop should be a function to handle removing the product from the cart.
const Product = ({ data, onAdd, onRemove }) => {
  const { cart } = useSelector((state) => state);
  const { id, name, price, imageUrl } = data;

  return (
    <div className="wrapper col-md-4">
      <div className="card">
        <img
          className="card-img-top center-block"
          src={imageUrl}
          alt="Card cap"
        />

        <div className="card-body pt-2 text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          {!cart.cartProductIds.includes(id) ? (
            <button className="btn btn-primary" onClick={onAdd}>
              Add to cart
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={onRemove}>
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
