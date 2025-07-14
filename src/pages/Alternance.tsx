import NavigationBar from "@/components/NavigationBar";
import AlternanceSection from "@/components/AlternanceSection";
import Footer from "@/components/Footer";

const Alternance = () => {
  return (
    <div className="min-h-screen bg-background">
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