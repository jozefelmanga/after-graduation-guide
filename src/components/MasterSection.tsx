import { BookOpen, ExternalLink, FileText, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import NavigationCard from "./NavigationCard";

const MasterSection = () => {
  const platforms = [
    { name: "Cursus.tn", url: "http://cursus.tn/" },
    { name: "Master UTM", url: "http://mastere.utm.rnu.tn/" },
    { name: "Master UCAR", url: "https://master.ucar.rnu.tn/" }
  ];

  const universities = [
    { name: "جامعة تونس", url: "www.utunis.rnu.tn" },
    { name: "جامعة قرطاج", url: "www.ucar.rnu.tn" },
    { name: "جامعة المنار", url: "www.uma.rnu.tn" },
    { name: "جامعة سوسة", url: "www.uss.rnu.tn" },
    { name: "جامعة صفاقس", url: "www.uso.rnu.tn" },
    { name: "جامعة المنستير", url: "www.um.rnu.tn" },
    { name: "جامعة قابس", url: "www.univgb.rnu.tn" },
    { name: "جامعة قفصة", url: "www.ugaf.rnu.tn" }
  ];

  const documents = [
    "بطاقة تعريف أو جواز سفر",
    "شهادة الإجازة / شهادة نجاح",
    "كشف أعداد",
    "سيرة ذاتية",
    "رسالة تحفيزية"
  ];

  return (
    <NavigationCard
      id="master"
      title="Master في تونس"
      description="🎓 الماجستير"
      icon={BookOpen}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Master Types */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Users className="w-5 h-5" />
              أنواع الماستير
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" dir="rtl">
            <div className="border-r-4 border-secondary pr-4">
              <h4 className="font-semibold text-secondary">1. Master Professionnel (ماستر مهني)</h4>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>الهدف:</strong> تحضير الطلبة لسوق الشغل<br/>
                <strong>يشمل:</strong> تربصات، دراسة حالات، مهارات تطبيقية<br/>
                <strong>ينفع:</strong> اللي يحب يخدم بعد التخرج مباشرة
              </p>
            </div>
            
            <div className="border-r-4 border-accent pr-4">
              <h4 className="font-semibold text-accent-foreground">2. Mastère de Recherche (بحث علمي)</h4>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>الهدف:</strong> التحضير للدكتوراه والبحث الأكاديمي<br/>
                <strong>يشمل:</strong> مناهج علمية، مذكرة بحث<br/>
                <strong>ينفع:</strong> اللي ناوي يكمل دكتوراه أو يحب يدرّس
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Platforms */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <ExternalLink className="w-5 h-5" />
              منصات التقديم
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                className="w-full justify-between hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  {platform.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Universities Grid */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <BookOpen className="w-5 h-5" />
            مواقع الجامعات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {universities.map((uni) => (
              <Button
                key={uni.url}
                variant="ghost"
                size="sm"
                className="text-xs h-auto p-3 border hover:bg-muted"
                asChild
              >
                <a href={`http://${uni.url}`} target="_blank" rel="noopener noreferrer">
                  <div className="text-center">
                    <div className="font-medium">{uni.name}</div>
                    <div className="text-muted-foreground text-xs mt-1">{uni.url}</div>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Required Documents */}
      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-accent-foreground">
            <FileText className="w-5 h-5" />
            الوثائق المطلوبة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-2" dir="rtl">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Note */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4" dir="rtl">
        <h4 className="font-semibold text-primary mb-2">📌 كيف تبدأ؟</h4>
        <p className="text-sm">
          تابع صفحة <strong>invention TN</strong> — المصدر الرسمي لأخبار الماستير.
        </p>
        <Button variant="accent" size="sm" className="mt-3" asChild>
          <a href="https://www.facebook.com/profile.php?id=61577206291378" target="_blank" rel="noopener noreferrer">
            زيارة الصفحة
            <ExternalLink className="w-4 h-4 mr-2" />
          </a>
        </Button>
      </div>
    </NavigationCard>
  );
};

export default MasterSection;