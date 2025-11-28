import { useCart } from "../context/CartContext.jsx";

function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <article className="cart-item">
      <div>
        <h4>{item.title}</h4>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>
      <button
        className="button button-danger"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </article>
  );
}

export default CartItem;
