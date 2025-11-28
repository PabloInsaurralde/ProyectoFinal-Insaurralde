import { useState } from "react";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <section className="item-detail-layout">
      <img
        src={product.image}
        alt={product.title}
        className="item-detail-image"
      />

      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="card-price">${product.price}</p>
        <p>Stock disponible: {product.stock}</p>

        {product.stock === 0 && <p>Producto sin stock</p>}

        {product.stock > 0 && !added && (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        )}

        {added && (
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to="/cart">
              <button className="button button-primary">Ir al carrito</button>
            </Link>
            <Link to="/">
              <button className="button button-secondary">
                Seguir explorando
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ItemDetail;
