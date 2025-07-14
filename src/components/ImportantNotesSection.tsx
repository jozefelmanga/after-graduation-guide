import { CheckCircle, AlertTriangle } from "lucide-react";
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
          <Card className="border-secondary/20 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                نصائح مهمة
              </CardTitle>
            </CardHeader>
            <CardContent dir="rtl">
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 dark:bg-secondary/20 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warnings */}
          <Card className="border-amber-300 dark:border-amber-600/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="w-5 h-5" />
                تحذيرات مهمة
              </CardTitle>
            </CardHeader>
            <CardContent dir="rtl">
              <div className="space-y-3">
                {warnings.map((warning, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50 transition-colors duration-300">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <span className="text-sm text-amber-700 dark:text-amber-300">{warning}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 rounded-lg transition-colors duration-300">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">💡 نصيحة ذهبية</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  راجع كل المعلومات مرتين قبل التأكيد. البيانات الخاطئة ممكن تؤدي للإقصاء من المناظرة.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImportantNotesSection;