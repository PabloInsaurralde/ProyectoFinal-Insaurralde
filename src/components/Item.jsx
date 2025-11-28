import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <article className="card">
      <img src={item.image} alt={item.title} />
      <h3 className="card-title">{item.title}</h3>
      <p className="card-price">${item.price}</p>
      <small>Categoría: {item.category}</small>
      <button className="button button-primary">
        <Link
          to={`/item/${item.id}`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Ver detalle
        </Link>
      </button>
    </article>
  );
}

export default Item;
