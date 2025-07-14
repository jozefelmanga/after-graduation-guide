import { Calculator, School, FileCheck, Users, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import NavigationCard from "./NavigationCard";

const ConcoursSection = () => {
  const steps = [
    "التسجيل الإلكتروني",
    "القبول الأولي (حسب السكور)",
    "إيداع الملف الورقي (نسخة مطابقة للأصل)",
    "القبول النهائي"
  ];

  const documents = [
    "نسخة رقمية من بطاقة التعريف",
    "شهادة نجاح أو ديبلوم",
    "كشف أعداد الجامعية + الباك",
    "وثائق تأجيل الترسيم أو إعادة التوجيه",
    "ملحق خاص بالسنة الأولى (من المنصة)"
  ];

  const concoursTypes = [
    {
      title: "Concours Spécifique National",
      description: "تنظمها وزارة التعليم العالي",
      types: ["A: داخلي (في نفس المؤسسة)", "B: خارجي (من مؤسسة لأخرى)"]
    },
    {
      title: "Concours Indépendants",
      description: "تنظمها الجامعات والمدارس الخاصة",
      examples: "INSAT, FST, FSB, INTEK, ISIMS, ISSAT Sousse..."
    }
  ];

  const calculators = [
    { name: "CSS Core 2025", url: "https://csscore2025.vercel.app/" },
    { name: "Score App", url: "https://makaabi.github.io/scoreapp/1ere" }
  ];

  return (
    <NavigationCard
      id="concours"
      title="Concours Spécifique"
      description="🏛️ المناظرة الخصوصية للمهندسين"
      icon={School}
    >
      {/* Introduction */}
      <Card className="border-secondary/20 bg-secondary/5">
        <CardHeader>
          <CardTitle className="text-secondary">📌 ما هو؟</CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          <p className="text-sm leading-relaxed">
            فرصة للدخول إلى Cycle Ingénieur للطلبة المتخرجين من الإجازة أو السنة الأولى ماجستير.
            ### 

المناظرة الخصوصية للدخول لمدارس المهندسين  هي فرصة للطلبة المتخرّجين من الإجازة ولا سنة أولى ماجستير باش ينجموا يدخلوا لل
Cycle Ingénieur
يعني يكمّلوا قرايتهم كمهندسين

👨‍🎓 طلبة الإجازة ينجموا يترشّحوا لسنة أولى هندسة
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button variant="secondary" size="sm" asChild>
              <a href="https://csingenieur.inscription.tn/" target="_blank" rel="noopener noreferrer">
                📥 التقديم عبر المنصة
                <ExternalLink className="w-4 h-4 mr-2" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.facebook.com/share/g/1HVKR6Z14i/" target="_blank" rel="noopener noreferrer">
                📘 جروب المستجدات
                <Users className="w-4 h-4 mr-2" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Steps */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileCheck className="w-5 h-5" />
              خطوات الترشح
            </CardTitle>
          </CardHeader>
          <CardContent dir="rtl">
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Badge variant="secondary" className="min-w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </Badge>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Score Calculation */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent-foreground">
              <Calculator className="w-5 h-5" />
              حساب السكور
            </CardTitle>
          </CardHeader>
          <CardContent dir="rtl">
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg text-sm">
                <strong>يعتمد على:</strong> المعدلات، الرتبة، اللغة، السن
              </div>
              <div className="bg-secondary/10 p-3 rounded-lg text-sm">
                <strong>الحد الأدنى:</strong><br/>
                • +40 نقطة للسنة الأولى<br/>
                • +60 نقطة للسنة الثانية
              </div>
              <div className="space-y-2">
                <h5 className="font-medium">أدوات لحساب السكور:</h5>
                {calculators.map((calc) => (
                  <Button
                    key={calc.name}
                    variant="outline"
                    size="sm"
                    className="w-full justify-between"
                    asChild
                  >
                    <a href={calc.url} target="_blank" rel="noopener noreferrer">
                      {calc.name}
                      <Calculator className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Required Documents */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <FileCheck className="w-5 h-5" />
            الوثائق المطلوبة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-2" dir="rtl">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Types of Concours */}
      <Card className="border-secondary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <School className="w-5 h-5" />
            أنواع المناظرات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4" dir="rtl">
          {concoursTypes.map((type, index) => (
            <div key={index} className="border-r-4 border-secondary pr-4">
              <h4 className="font-semibold text-secondary">{type.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
              {type.types ? (
                <ul className="text-sm space-y-1">
                  {type.types.map((t, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-secondary rounded-full"></div>
                      {t}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">{type.examples}</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Important Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4" dir="rtl">
        <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          ملاحظة مهمة
        </h4>
        <p className="text-sm text-amber-700">
          تابع صفحات المدارس الرسمية لمعرفة مواعيد وبلاغات المناظرات.
        </p>
      </div>
    </NavigationCard>
  );
};

export default ConcoursSection;