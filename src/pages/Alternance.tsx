import NavigationBar from "@/components/NavigationBar";
import AlternanceSection from "@/components/AlternanceSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Alternance = () => {
  // Structured data for Alternance page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://after-graduation.netlify.app/alternance"
    },
    "headline": "Alternance - التكوين المزدوج في تونس",
    "description": "دليل شامل عن التكوين المزدوج في تونس - مسار يجمع بين الدراسة والعمل في شركة مع راتب شهري وخبرة عملية",
    "author": {
      "@type": "Organization",
      "name": "Future Tunisia Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Future Tunisia Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://after-graduation.netlify.app/placeholder.svg"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Alternance - التكوين المزدوج في تونس"
        description="دليل شامل عن التكوين المزدوج في تونس - مسار يجمع بين الدراسة والعمل في شركة مع راتب شهري وخبرة عملية"
        canonicalUrl="https://after-graduation.netlify.app/alternance"
        keywords="تكوين مزدوج، تدريب مهني، alternance tunisie، دراسة وعمل، تكوين مدفوع الأجر، فرص عمل للخريجين"
        ogType="article"
        structuredData={structuredData}
      />
      <NavigationBar />
      
      <main id="main-content" className="relative pt-16">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <AlternanceSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Alternance; 