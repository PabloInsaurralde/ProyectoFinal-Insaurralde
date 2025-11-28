import Item from "./Item.jsx";

function ItemList({ items }) {
  return (
    <div className="product-grid">
      {items.map((prod) => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
}

export default ItemList;
