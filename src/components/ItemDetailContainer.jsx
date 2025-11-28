import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import ItemDetail from "./ItemDetail.jsx";
import { getProductById } from "../services/firestore.js";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getProductById(itemId);
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener detalle:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [itemId]);

  if (loading) return <Loader />;

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
