import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "KT GLOW | Best Steel Polishing Products in Hisar, Haryana",
  description = "KT GLOW offers quality steel polishing products, stainless steel polishing solutions, metal finishing products, industrial abrasives, and polishing compounds in Hisar, Haryana, India.",
  keywords = [
    "KT GLOW",
    "best steel polishing products in Hisar",
    "steel polishing products Hisar",
    "steel polishing products manufacturer in Hisar",
    "steel polishing products supplier in Hisar",
    "stainless steel polishing products Hisar",
    "metal polishing products Hisar",
    "industrial polishing products Hisar",
    "metal surface finishing products Hisar",
    "steel polishing compound Hisar",
    "stainless steel polishing compound",
    "metal polishing compound",
    "industrial abrasive products Hisar",
    "abrasive products manufacturer India",
    "steel polishing supplier Haryana",
    "stainless steel polishing supplier Haryana",
    "industrial polishing solutions Haryana",
    "steel finishing products India",
    "metal finishing products manufacturer",
    "industrial metal polishing products",
    "stainless steel surface finishing",
    "steel buffing products",
    "metal buffing products",
    "steel polishing tools",
    "industrial polishing materials",
    "steel polishing products India",
    "stainless steel polishing solutions",
    "metal polishing solutions",
    "industrial steel finishing solutions",
    "best metal polishing products",
  ],
  canonicalUrl,
  ogImage,
  ogType = "website",
}) => {
  const keywordContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywordContent} />

      <meta name="robots" content="index, follow" />

      <meta name="author" content="KT GLOW" />

      <meta name="application-name" content="KT GLOW" />

      <meta name="language" content="English" />

      {/* Local SEO */}
      <meta name="geo.region" content="IN-HR" />

      <meta name="geo.placename" content="Hisar, Haryana, India" />

      {/* Canonical URL */}
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}

      {/* Open Graph SEO */}
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content={ogType} />

      <meta property="og:site_name" content="KT GLOW" />

      {canonicalUrl && (
        <meta property="og:url" content={canonicalUrl} />
      )}

      {ogImage && (
        <meta property="og:image" content={ogImage} />
      )}

      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      {ogImage && (
        <meta name="twitter:image" content={ogImage} />
      )}
    </Helmet>
  );
};

export default SEO;