import { useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount((c) => c + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((c) => c - 1);
  };

  const handleAdd = () => {
    if (stock === 0) return;
    onAdd(count);
  };

  return (
    <div>
      <div className="counter">
        <button className="button button-secondary" onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button className="button button-secondary" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="button button-primary"
        style={{ marginTop: "8px" }}
        onClick={handleAdd}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
