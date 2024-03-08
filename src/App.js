import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
