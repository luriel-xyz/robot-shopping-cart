import React from "react";

// Component for rendering a single item in the shopping cart.
// Displays the product name, image, description, and an option to remove the item.
// The `data` prop should contain the necessary information for the item.
// The `onRemove` prop should be a function to handle the removal of the item from the cart.
const CartItem = ({ data, onRemove }) => {
  const { name, detail, imageUrl } = data;
  return (
    <div className="d-flex justify-content-center align-items-center py-3">
      <div className="text-center">
        <figure>
          <img className="item-image" src={imageUrl} alt="product" />
        </figure>

        <div className="item-info">
          <h4 className="pt-1">{name}</h4>
          <p className="text-truncate">{detail}</p>
          <button className="btn btn-primary" onClick={onRemove}>
            <i className="bi bi-trash-fill" /> Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
