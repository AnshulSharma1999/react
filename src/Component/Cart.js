import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-auto p-4 text-center w-6/12">
      <h1 className="font-bold text-xl">Cart</h1>
      <button
        className="bg-black text-white p-2 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? <p>Cart is empty. Please add some items.</p> : <ItemList data={cartItems}></ItemList>}
    </div>
  );
};

export default Cart;
