import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { createOrder } from "../services/firestore.js";
import { Link } from "react-router-dom";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  if (cart.length === 0 && !orderId) {
    return (
      <section>
        <h2>Checkout</h2>
        <p>No hay productos en el carrito.</p>
        <Link to="/">
          <button className="button button-primary">Ir al catálogo</button>
        </Link>
      </section>
    );
  }

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer,
      items: cart.map((prod) => ({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: prod.quantity,
      })),
      total: totalPrice,
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <section>
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
        <Link to="/">
          <button className="button button-primary">Volver al inicio</button>
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Checkout</h2>
      <p>Total a pagar: ${totalPrice}</p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <button
          className="button button-primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;
