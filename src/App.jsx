import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Aboutpage from "./pages/Aboutpage";
import Dashboard from "./pages/Home";
import CartPage from "./pages/CartPage";
import AddToCart from "./pages/Productpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
