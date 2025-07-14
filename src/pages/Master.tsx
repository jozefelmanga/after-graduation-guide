import NavigationBar from "@/components/NavigationBar";
import MasterSection from "@/components/MasterSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Master = () => {
  // Structured data for Master page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://after-graduation.netlify.app/master"
    },
    "headline": "Master في تونس - دليل شامل للدراسات العليا",
    "description": "دليل كامل عن أنواع الماجستير في تونس، المنصات المخصصة للتقديم، الوثائق المطلوبة والمواعيد المهمة",
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
        title="Master في تونس - دليل شامل للدراسات العليا"
        description="دليل كامل عن أنواع الماجستير في تونس، المنصات المخصصة للتقديم، الوثائق المطلوبة والمواعيد المهمة"
        canonicalUrl="https://after-graduation.netlify.app/master"
        keywords="ماجستير تونس، دراسات عليا، master professionnel، master recherche، دليل الماجستير، التسجيل في الماجستير"
        ogType="article"
        structuredData={structuredData}
      />
      <NavigationBar />
      
      <main id="main-content" className="relative pt-16">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <MasterSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Master; 