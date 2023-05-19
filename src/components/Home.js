import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../data/cartSlice";
import db from "../data/db.json";
import Product from "./Product";
import "../styles/home.css";

// Home component represents the home page displaying the product catalog
const Home = () => {
  const dispatch = useDispatch();

  const handleClickAdd = (id) => () => {
    dispatch(addToCart(id));
  };

  const handleClickRemove = (id) => () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container product-catalogue">
      <div className="row">
        {/* Render Product components for each product */}
        {db.products.map((product) => (
          <Product
            key={product.id}
            data={product}
            onAdd={handleClickAdd(product.id)}
            onRemove={handleClickRemove(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
