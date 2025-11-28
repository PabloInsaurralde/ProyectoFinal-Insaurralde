import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import Loader from "./Loader.jsx";
import { getProducts, getProductsByCategory } from "../services/firestore.js";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        setItems(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) return <Loader />;

  if (items.length === 0) {
    return (
      <section>
        {greeting && <h2>{greeting}</h2>}
        <p>No hay productos disponibles en esta sección.</p>
      </section>
    );
  }

  return (
    <section>
      {greeting && <h2>{greeting}</h2>}
      <ItemList items={items} />
    </section>
  );
}

export default ItemListContainer;
