import { Briefcase, ExternalLink, School } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import NavigationCard from "./NavigationCard";

const AlternanceSection = () => {
  const institutions = [
    { name: "TEK-UP", url: "https://tek-up.de/", description: "جامعة تقنية متخصصة", logo: "/assets/images/tek-up.png" },
    { name: "ESPRIT", url: "https://www.esprit.tn/", description: "مدرسة خاصة للهندسة", logo: "/assets/images/esprit.jpg" },
    { name: "SEASAM", url: "https://universitesesame.com/", description: "جامعة سيزام", logo: "/assets/images/seasam.jpg" },
    { name: "ITEAM", url: "https://iteam-univ.tn/", description: "معهد التكنولوجيا", logo: "/assets/images/Iteam.jpg" }
  ];

  return (
    <NavigationCard
      id="alternance"
      title="Alternance"
      description="👨‍🔧 التكوين المزدوج"
      icon={Briefcase}
    >
      {/* Introduction */}
      <Card className="border-secondary/20 bg-secondary/5">
        <CardHeader>
          <CardTitle className="text-secondary">ما هو التكوين المزدوج؟</CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          <p className="text-sm leading-relaxed">
            مسار يجمع بين الدراسة والعمل في شركة بنفس الوقت. هذا النظام يخليك تكسب خبرة عملية أثناء الدراسة وتحصل على راتب في نفس الوقت.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/50 p-3 rounded-lg">
              <strong className="text-secondary">المزايا:</strong><br/>
              • خبرة عملية مضمونة<br/>
              • راتب أثناء الدراسة<br/>
              • فرصة شغل بعد التخرج
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <strong className="text-primary">المتطلبات:</strong><br/>
              • التزام بالوقت<br/>
              • توازن بين العمل والدراسة<br/>
              • مهارات تواصل جيدة
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Institutions */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <School className="w-5 h-5" />
            أين تجد برامج Alternance؟
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {institutions.map((inst) => (
              <div
                key={inst.name}
                className="border border-border rounded-lg p-4 hover:shadow-card transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg text-primary">{inst.name}</h4>
                    <p className="text-sm text-muted-foreground" dir="rtl">{inst.description}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img 
                      src={inst.logo} 
                      alt={`${inst.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={inst.url} target="_blank" rel="noopener noreferrer">
                    زيارة الموقع
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How to Apply */}
      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-accent-foreground">
            <Briefcase className="w-5 h-5" />
            كيفية التقديم
          </CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">الخطوات العامة:</h4>
              <ol className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">1</span>
                  زيارة موقع المؤسسة المختارة
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">2</span>
                  البحث عن قسم "برامج Alternance"
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">3</span>
                  ملء استمارة التقديم
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">4</span>
                  انتظار الرد والمقابلة
                </li>
              </ol>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-sm text-amber-700">
                <strong>💡 نصيحة:</strong> كل مؤسسة عندها شروطها ومواعيدها، اتصل بالإدارة أو تابع صفحاتهم للحصول على المعلومات الدقيقة.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card className="border-secondary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <Briefcase className="w-5 h-5" />
            لماذا Alternance؟
          </CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-secondary-foreground text-xl">💼</span>
              </div>
              <h4 className="font-semibold mb-2">خبرة مضمونة</h4>
              <p className="text-muted-foreground">تحصل على خبرة حقيقية في السوق أثناء الدراسة</p>
            </div>
            
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent-foreground text-xl">💰</span>
              </div>
              <h4 className="font-semibold mb-2">راتب شهري</h4>
              <p className="text-muted-foreground">دخل مالي يساعدك على تغطية مصاريف الدراسة</p>
            </div>
            
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-foreground text-xl">🚀</span>
              </div>
              <h4 className="font-semibold mb-2">فرصة توظيف</h4>
              <p className="text-muted-foreground">إمكانية الحصول على عمل دائم بعد التخرج</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </NavigationCard>
  );
};

export default AlternanceSection;