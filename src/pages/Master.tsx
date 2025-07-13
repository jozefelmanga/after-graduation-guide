import NavigationBar from "@/components/NavigationBar";
import MasterSection from "@/components/MasterSection";
import Footer from "@/components/Footer";

const Master = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      <main id="main-content" className="relative">
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