import NavigationBar from "@/components/NavigationBar";
import ConcoursSection from "@/components/ConcoursSection";
import ImportantNotesSection from "@/components/ImportantNotesSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Concours = () => {
  // Structured data for Concours page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://after-graduation.netlify.app/concours"
    },
    "headline": "Concours Spécifique - المناظرة الخصوصية للمهندسين",
    "description": "دليل متكامل للمناظرة الخصوصية للمهندسين في تونس - فرص الدخول إلى Cycle Ingénieur للطلبة المتخرجين من الإجازة",
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
        title="Concours Spécifique - المناظرة الخصوصية للمهندسين"
        description="دليل متكامل للمناظرة الخصوصية للمهندسين في تونس - فرص الدخول إلى Cycle Ingénieur للطلبة المتخرجين من الإجازة"
        canonicalUrl="https://after-graduation.netlify.app/concours"
        keywords="مناظرة خصوصية، مهندسين تونس، مهندس معماري، منح دراسية، cycle ingénieur، admission génie"
        ogType="article"
        structuredData={structuredData}
      />
      <NavigationBar />
      
      <main id="main-content" className="relative pt-16">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <ConcoursSection />
        </div>
        
        <ImportantNotesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Concours; 