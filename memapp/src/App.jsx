import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Products from "./pages/SingleProduct";
import Product from "./pages/ProductList";
import Register from "./pages/Register";
import Shops from "./pages/ShopperStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shops/:title" element={<Shops />} />
        <Route path="/product/:cat" element={<Product />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
