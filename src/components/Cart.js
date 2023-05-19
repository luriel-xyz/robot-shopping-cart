import db from "../data/db.json";
import { useSelector, useDispatch } from "react-redux";
import { clearAllItems, removeFromCart } from "../data/cartSlice";
import CartItem from "./CartItem";
import "../styles/cart.css";

// Component for rendering the cart items.
const Cart = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Filter the products to get only the products that are in the cart
  const cartItems = db.products.filter((product) =>
    cartProductIds.includes(product.id)
  );

  const handleClickRemove = (id) => () => dispatch(removeFromCart(id));

  const handleClickCheckout = () => {
    dispatch(clearAllItems());
  };

  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        <div className="cart-product">
          <h3 className="text-center">Cart items</h3>
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              data={product}
              onRemove={handleClickRemove(product.id)}
            />
          ))}

          <footer className="text-center mt-5">
            <button className="btn btn-primary" onClick={handleClickCheckout}>
              Checkout
            </button>
          </footer>
        </div>
      ) : (
        <div className="text-center empty-cart">
          <i className="bi bi-cart3" />
          <p className="text-white">Your shopping cart is currently empty.</p>
          <p className="text-white">
            Your cart is currently empty. No items have been added.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
