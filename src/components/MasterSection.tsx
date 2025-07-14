import { BookOpen, ExternalLink, FileText, Users, Briefcase, Beaker, Bell, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import NavigationCard from "./NavigationCard";

const MasterSection = () => {
  const platforms = [
    { name: "Cursus.tn", url: "http://cursus.tn/", description: "فيه كل الكونكور والمواعيد الرسمية" },
    { name: "Master UTM", url: "http://mastere.utm.rnu.tn/", description: "منصة التقديم للماستير في جامعة تونس المنار" },
    { name: "Master UCAR", url: "https://master.ucar.rnu.tn/", description: "منصة التقديم للماستير في جامعة قرطاج" }
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
    "كشف أعداد (Relevés de notes)",
    "سيرة ذاتية (CV)",
    "رسالة تحفيزية (Lettre de motivation)"
  ];

  return (
    <NavigationCard
      id="master"
      title="Master في تونس"
      description="🎓 الماجستير"
      icon={BookOpen}
    >
      <div className="flex flex-col gap-4">
        {/* Important Note */}
      <Card className="bg-primary/10 border border-primary/20 rounded-lg">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <Info className="w-5 h-5" />
            كيفاش تبدا في الماستير بطريقة ذكية؟
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3" dir="rtl">
          <div className="flex flex-col md:flex-row gap-1 items-center">
            <div className="flex-1 space-y-2">
              <p className="text-sm">
                أبدا بتبع صفحة <strong>invention TN</strong> — المصدر الرسمي لأخبار الماستير والفرص الدراسية في تونس. 🧭✨
              </p>
              
              <div className="bg-accent/10 p-2 rounded-md">
                <p className="text-sm">تلقى فيها:</p>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>تفاصيل البرامج</li>
                  <li>مواعيد الكونكور</li>
                  <li>منح وفرص قراية</li>
                </ul>
              </div>
              
              <div className="bg-muted p-2 rounded-md">
                <p className="text-sm font-medium">🆕 ملاحظة: الصفحة القديمة تمسحت، هاذي هي <strong>الرسمية الجديدة</strong>، تابعها كل نهار باش تكون ديما مواكب.</p>
                <ul className="text-sm mt-2">
                  <li className="flex items-center gap-2">✅ تتحدّث بصفة دورية</li>
                  <li className="flex items-center gap-2">✅ تغطي جميع الجامعات</li>
                  <li className="flex items-center gap-2">✅ تلقى فيها فرص محلية ودولية</li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 p-2 rounded-md">
                <p className="text-sm font-medium">
                  <Bell className="inline-block w-4 h-4 mr-1" />
                  خليها عادة كل نهار تطل تشوف، يمكن تلقى فرصة تبدّل بيها مستقبلك.
                </p>
              </div>
            </div>
            
            <div className="md:w-2/5 flex-shrink-0">
              <img 
                src="/assets/images/invention.png" 
                alt="Invention TN" 
                className="rounded-lg shadow-md w-full max-w-[280px] mx-auto"
              />
            </div>
          </div>
          
          <Button variant="accent" size="sm" className="mt-3 w-full" asChild>
            <a href="https://www.facebook.com/profile.php?id=61577206291378" target="_blank" rel="noopener noreferrer">
              متابعة صفحة invention TN على فيسبوك
              <ExternalLink className="w-4 h-4 mr-2" />
            </a>
          </Button>
        </CardContent>
      </Card>
      </div>
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
              <h4 className="font-semibold text-accent-foreground flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                1. Master Professionnel (ماستر مهني)
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>🛠️ الهدف:</strong> تحضير الطلبة لسوق الشغل، بالتكوين التطبيقي والخبرة الميدانية.<br/>
                <strong>👩‍💼 شنوة فيه؟</strong> قراية تطبيقية، تربّصات، دراسة حالات حقيقية، ومهارات مطلوبة في الخدمة.<br/>
                <strong>📄 عادة يشمل:</strong> تربّص نهائي + مشروع تطبيقي ولا تقرير.<br/>
                <strong>💼 شنوة ينفع؟</strong>
                <ul className="list-disc list-inside pl-4 mt-1">
                  <li>اللي يحب يخدم مباشرة بعد الماستير.</li>
                  <li>اللي يحب يخدم في شركات، جمعيات، ولا إدارات عمومية.</li>
                </ul>
              </p>
            </div>
            
            <div className="border-r-4 border-accent pr-4">
              <h4 className="font-semibold text-accent-foreground flex items-center gap-2">
                <Beaker className="w-4 h-4" />
                2. Mastère de Recherche (بحث علمي)
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>🔬 الهدف:</strong> تحضير الطلبة للدكتوراه والمجال الأكاديمي والبحث العلمي.<br/>
                <strong>📚 شنوة فيه؟</strong> قراية نظرية، مناهج علمية، تفكير نقدي، وتحضير بحوث.<br/>
                <strong>📝 عادة يشمل:</strong> مذكرة بحث تحت إشراف أكاديمي.<br/>
                <strong>🎓 شنوة ينفع؟</strong>
                <ul className="list-disc list-inside pl-4 mt-1">
                  <li>اللي ناوي يكمل دكتوراه.</li>
                  <li>اللي يحب يخدم في البحث العلمي ولا في التدريس الجامعي.</li>
                </ul>
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
          <CardContent className="space-y-4" dir="rtl">
            <p className="text-sm mb-2">
              <strong className="flex items-center gap-1">
                <Info className="w-4 h-4" />
                منصّات مهمّة للتقديم على الماستير:
              </strong>
            </p>
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                className="w-full justify-between hover:bg-primary hover:text-primary-foreground text-right"
                asChild
              >
                <a href={platform.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{platform.name}</span>
                    <span className="text-xs text-muted-foreground">{platform.description}</span>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            ))}
            <p className="text-xs text-muted-foreground">
              <Bell className="inline-block w-3 h-3 mr-1" /> ديما تراجعهم باش ما يفوتك شي.
            </p>
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
        <CardContent dir="rtl">
          <p className="text-sm mb-3">
            <strong>🌐 مواقع جامعات عمومية في تونس:</strong>
          </p>
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
          <p className="text-xs text-muted-foreground mt-3">
            📌 تفتّش ديما على موقع <strong>المعهد</strong> ولا <strong>الكلية</strong> اللي باش تقدم فيها (ISG, ISET, ENIT, ENSI, FST ...).
          </p>
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
          <p className="text-sm mb-2 text-right">
            <strong>📄 الوثائق المطلوبة عادة:</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-2" dir="rtl">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-right">
            ➡️ حضّرهم بكري باش ما تتقلقش في آخر وقت.
          </p>
        </CardContent>
      </Card>

      
    </NavigationCard>
  );
};

export default MasterSection;