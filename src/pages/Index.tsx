import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import SectionCard from "@/components/SectionCard";
import Footer from "@/components/Footer";
import { BookOpen, School, Briefcase, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      
      <main id="main-content" className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">اختر مسارك المستقبلي</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <SectionCard 
              title="Master في تونس" 
              description="🎓 الماجستير"
              icon={BookOpen}
              path="/master"
              summary="تعرف على أنواع الماجستير المتاحة والمنصات المخصصة للتقديم والوثائق المطلوبة للتسجيل."
            />
            
            <SectionCard 
              title="Concours Spécifique" 
              description="🏛️ المناظرة الخصوصية للمهندسين"
              icon={School}
              path="/concours"
              summary="فرصة للدخول إلى Cycle Ingénieur للطلبة المتخرجين من الإجازة أو السنة الأولى ماجستير."
            />
            
            <SectionCard 
              title="Alternance" 
              description="👨‍🔧 التكوين المزدوج"
              icon={Briefcase}
              path="/alternance"
              summary="مسار يجمع بين الدراسة والعمل في شركة بنفس الوقت مع راتب شهري وخبرة عملية."
            />
          </div>
          
          {/* Final Message */}
          <Card className="mt-16 border-primary/20 bg-gradient-card">
            <CardContent className="text-center p-8">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4" dir="rtl">
                ❤️ خاتمة
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground" dir="rtl">
                <p>تم إعداد هذا الدليل بحب من طالب مر بنفس الطريق.</p>
                <p>إذا عندك ملاحظات أو معلومات جديدة، ابعثلي.</p>
                <p>وإذا لقيت المحتوى مفيد، شاركه مع أصحابك.</p>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-primary font-medium" dir="rtl">
                  إن شاء الله بالتوفيق لكل الناس 🌟
                </p>
                <p className="text-sm text-muted-foreground mt-2" dir="rtl">
                  كل واحد عندو طريقه، والمهم تاخذ وقتك وتحضّر مليح.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
