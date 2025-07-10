import { GraduationCap, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center text-white max-w-4xl">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm">
            <GraduationCap className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            What's Next?
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight" dir="rtl">
            تخرّجت؟ شنوّا الخطوة الجاية؟
          </h2>
          
          <p className="text-lg md:text-xl mb-4 opacity-90" dir="rtl">
            مرحباً و مبروك التخرج!
          </p>
          <p className="text-base md:text-lg mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed" dir="rtl">
            إذا كنت ضايع شوية ومش عارف منين تبدأ، هالدليل معمول باش يسهّل عليك الطريق ويوضحلك الخيارات اللي عندك بعد الإجازة.
          </p>
          
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToContent}
            className="text-lg px-8 py-6 h-auto shadow-elevated"
          >
            ابدأ الاستكشاف
            <ArrowDown className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60 animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;