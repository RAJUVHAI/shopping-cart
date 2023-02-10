import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/layouts/frontend/Nav";
import Cart from "../pages/cart/Cart";
import Index from "../pages/home/Index";
import Footer from "../components/layouts/frontend/Footer";
import Wishlist from "../components/wishlist/WishlistCard";
const FrontendRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/home" element={<Index />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default FrontendRoutes;
