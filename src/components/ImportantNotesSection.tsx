import { CheckCircle, AlertTriangle, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ImportantNotesSection = () => {
  const tips = [
    "حضّر أوراقك بدري",
    "الملفات PDF واضحة",
    "عندك الحق في 10 اختيارات (30 د للاختيار)",
    "استخدم بطاقة e-dinar jeune للدفع",
    "كن دقيق في إدخال المعلومات",
    "القبول الأولي لا يعني القبول النهائي"
  ];

  const warnings = [
    "أي خطأ في المعلومات = إقصاء محتمل"
  ];

  return (
    <div id="notes" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          ملاحظات هامة
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tips */}
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                نصائح مهمة
              </CardTitle>
            </CardHeader>
            <CardContent dir="rtl">
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warnings */}
          <Card className="border-amber-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <AlertTriangle className="w-5 h-5" />
                تحذيرات مهمة
              </CardTitle>
            </CardHeader>
            <CardContent dir="rtl">
              <div className="space-y-3">
                {warnings.map((warning, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-sm text-amber-700">{warning}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💡 نصيحة ذهبية</h4>
                <p className="text-sm text-blue-700">
                  راجع كل المعلومات مرتين قبل التأكيد. البيانات الخاطئة ممكن تؤدي للإقصاء من المناظرة.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Message */}
        <Card className="mt-8 border-primary/20 bg-gradient-card">
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
    </div>
  );
};

export default ImportantNotesSection;