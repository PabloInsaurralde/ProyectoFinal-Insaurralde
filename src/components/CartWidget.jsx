import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();

  if (totalQuantity === 0) return null;

  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
      <span>🛒</span>
      <span className="cart-count">{totalQuantity}</span>
    </div>
  );
}

export default CartWidget;
