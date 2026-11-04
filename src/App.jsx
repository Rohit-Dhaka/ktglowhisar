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
import ContactForm from "./components/contact/ContactForm";
function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/request-quote" element={<ContactForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
