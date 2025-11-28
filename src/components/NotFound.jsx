import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h2>Página no encontrada</h2>
      <p>La ruta que intentaste visitar no existe.</p>
      <Link to="/">
        <button className="button button-primary">Volver al inicio</button>
      </Link>
    </section>
  );
}

export default NotFound;
