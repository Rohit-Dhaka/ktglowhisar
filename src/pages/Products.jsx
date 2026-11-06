import FeaturedProductsSection from "../components/products/FeaturedProductsSection";
import IndustryApplicationsSection from "../components/products/IndustryApplicationsSection";
import OurProducts from "../components/products/OurProducts";
import ProductQualitySection from "../components/products/ProductQualitySection";
import ProductsHero from "../components/products/ProductsHero";
import SEO from "../components/SEO";

const Products = () => {
  return (
    <main>
      <SEO
        title="Steel Polishing Products Manufacturer in Hisar | KT GLOW"
        description="Explore KT GLOW steel polishing products, stainless steel polishing compounds, buffing products, and industrial metal finishing solutions."
        canonicalUrl="https://yourdomain.com/products"
      />
      <ProductsHero />
      <OurProducts />
      <FeaturedProductsSection />
      <ProductQualitySection />
      <IndustryApplicationsSection />
    </main>
  );
};

export default Products;
