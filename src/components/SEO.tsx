import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  keywords?: string;
  lang?: string;
  structuredData?: Record<string, unknown>;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  ogImage = "/placeholder.svg",
  keywords = "",
  lang = "ar",
  structuredData,
}: SEOProps) => {
  // Construct the full title with site name
  const fullTitle = `${title} | After Graduation Guide for Tunisian Students`;
  const siteName = "After Graduation Guide for Tunisian Students | دليل ما بعد التخرج للطلبة التوانسة";
  
  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured data for search engines */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 