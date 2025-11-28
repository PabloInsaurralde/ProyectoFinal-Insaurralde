import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="KineLab Academy® – Formación Deportiva Profesional" />
            }
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
