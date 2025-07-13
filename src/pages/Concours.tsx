import NavigationBar from "@/components/NavigationBar";
import ConcoursSection from "@/components/ConcoursSection";
import ImportantNotesSection from "@/components/ImportantNotesSection";
import Footer from "@/components/Footer";

const Concours = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      <main id="main-content" className="relative">
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