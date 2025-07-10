import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import MasterSection from "@/components/MasterSection";
import ConcoursSection from "@/components/ConcoursSection";
import AlternanceSection from "@/components/AlternanceSection";
import ImportantNotesSection from "@/components/ImportantNotesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      
      <main id="main-content" className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 space-y-16">
          <MasterSection />
          <ConcoursSection />
          <AlternanceSection />
        </div>
        
        <ImportantNotesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
