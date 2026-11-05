import AboutSection from "../components/home/AboutSection";
import Hero from "../components/home/Hero";
import IndustriesWeServe from "../components/home/IndustriesWeServe";
import ManufacturingProcess from "../components/home/ManufacturingProcess";
import ProductApplications from "../components/home/ProductApplications";

import ProductsSection from "../components/home/ProductsSection";
import SEO from "../components/SEO";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ContactSection from "../components/home/ContactSection";
import LocationSection from "../components/home/Locationsection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <SEO
        title="Best Steel Polishing Products in Hisar | KT GLOW"
        description="KT GLOW provides premium steel polishing products, metal finishing solutions, and industrial abrasives in Hisar, Haryana."
        canonicalUrl="https://yourdomain.com/"
      />

      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <ProductsSection />
      {/* <IndustriesWeServe /> */}
      <ManufacturingProcess />
      <ProductApplications />
      <Testimonials/>
    <ContactSection/>
    <LocationSection/>
    </main>
  );
};

export default Home;
