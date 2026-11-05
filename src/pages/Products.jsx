import FeaturedProductsSection from "../components/products/FeaturedProductsSection";
import IndustryApplicationsSection from "../components/products/IndustryApplicationsSection";
import ProductContactSection from "../components/products/ProductContactSection";
import ProductQualitySection from "../components/products/ProductQualitySection";
import ProductRangeSection from "../components/products/ProductRangeSection";
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

      <ProductRangeSection />

      <FeaturedProductsSection />

      <ProductQualitySection />

      <IndustryApplicationsSection />

      <ProductContactSection />
    </main>
  );
};

export default Products;
