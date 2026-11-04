import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import IndustriesWeServe from "../components/IndustriesWeServe";
import LocationSection from "../components/Locationsection";
import ManufacturingProcess from "../components/ManufacturingProcess";
import ProductApplications from "../components/ProductApplications";

import ProductsSection from "../components/ProductsSection";
import SEO from "../components/SEO";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <SEO
        title="Best Steel Polishing Products in Hisar | KT GLOW"
        description="KT GLOW provides premium steel polishing products, metal finishing solutions, and industrial abrasives in Hisar, Haryana."
        canonicalUrl="https://yourdomain.com/"
      />

      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <IndustriesWeServe />
      <ManufacturingProcess />
      <ProductApplications />
      <ContactSection />
      <LocationSection />
    </main>
  );
};

export default Home;
