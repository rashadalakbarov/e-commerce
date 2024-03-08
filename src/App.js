import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
