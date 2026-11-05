import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./components/Privacypolicy";
import TermsAndConditions from "./components/Termsandconditions";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ScrollToTop from "./components/ScrollToTop";
import Resources from "./pages/Resources";
import ContactSection from "./components/home/ContactSection";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        
        {/* 👇 2. Dynamic Product Detail Route */}
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;