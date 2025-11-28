import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";

function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Carrito</h2>
        <p>El carrito está vacío.</p>
        <Link to="/">
          <button className="button button-primary">Ir al catálogo</button>
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h2>Carrito</h2>

      {cart.map((prod) => (
        <CartItem key={prod.id} item={prod} />
      ))}

      <div className="cart-summary">
        <p>
          <strong>Total:</strong> ${totalPrice}
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button className="button button-danger" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout">
            <button className="button button-primary">
              Finalizar compra
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
