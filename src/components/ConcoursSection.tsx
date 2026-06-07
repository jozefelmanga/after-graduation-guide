import { Calculator, School, FileCheck, Users, ExternalLink, AlertTriangle, Calendar, CheckCircle, Ban, Search, Clock, PieChart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import NavigationCard from "./NavigationCard";
import { Separator } from "./ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const ConcoursSection = () => {
  const steps = [
    {
      title: "التسجيل الإلكتروني",
      details: "تعمّر معطياتك على الموقع و ترفق الأوراق المطلوبة في ملف PDF (تسكاناهم ولا تصورهم بصيفة واضحة)."
    },
    {
      title: "القبول الأولي (Présélection)",
      details: "يتحسبلك سكور حسب ملفك و توصلك ميساج على الإيميل ولا التليفون إذا تم قبولك مبدئياً."
    },
    {
      title: "إيداع الملف الورقي",
      details: "تهز نفس الأوراق ولكن نسخ \"مطابقة للأصل\" للبلدية وتوصل الملف لأحد المراكز اللي تحددهم الوزارة في البلاغ. الملف هذا يتم اعتماده لكل الاختيارات اللي قمت بيها، موش لازم دوسي لكل مؤسسة أو كلية."
    },
    {
      title: "القبول النهائي",
      details: "توصلك رسالة ثانية تعلمك وين تقبلت و في شنوّا الاختصاص."
    }
  ];

  const documents = [
    "✅ بطاقة تعريف وطنية (نسخة رقمية)",
    "✅ شهادة نجاح أو ديبلوم (نسخة رقمية)",
    "✅ بطاقات أعداد السنوات الجامعية (من بعد الباك)",
    "✅ بطاقة أعداد الباكالوريا",
    "✅ وثائق إعادة التوجيه أو تأجيل الترسيم (إذا عندك)",
    "✅ ملحق خاص بالمترشحين للسنة الأولى (من الموقع، ويختموه في المؤسسة)"
  ];

  const concoursTypes = [
    {
      title: "Concours Spécifique National",
      description: "تنظمها وزارة التعليم العالي",
      details: "المناظرة هاذي تنظمها وزارة التعليم العالي ، و تشارك فيها الجامعات والمدارس اللي تقري Cycle Ingénieur (مدارس المهندسين). تنجم تترشح كان تكون متخرج إجازة أو قاري سنة أولى ماجستير، على حسب الاختصاص و طاقة الاستيعاب.",
      types: [
        "A: interne → كيف تكون تقرا في fac اللي تقري cycle وتحب تكمّل فيها", 
        "B: externe → كيف تقرا في fac ما تقريش cycle وتحب تمشي لمدرسة أو جامعة أخرى"
      ]
    },
    {
      title: "Concours Indépendants",
      description: "تنظمها الجامعات والمدارس الخاصة",
      details: "هاذوما مناظرات تعملهم جامعات ومدارس على حسابها الخاص، ما عندهمش علاقة مباشرة بالConcours Spécifique. يفتحوا الكونكور متاعهم عادة في شهر أوت، و يطلبوا تقريبا نفس الأوراق. فمّا بعض المدارس تحسب حتى سنة ثالثة إجازة في السكور.",
      examples: "INSAT, FST, FSB, INTEK, ISTMT, ISIMS, ISSAT Sousse...",
      link: "https://drive.google.com/drive/mobile/folders/1kY9qw3tyfvebSWInBrGXdEm22IoVMFhg"
    }
  ];

  const calculators = [
    { name: "CSS Core 2025", url: "https://csscore2025.vercel.app/" },
    { name: "Score App", url: "https://makaabi.github.io/scoreapp/1ere" }
  ];

  const warnings = [
    "أي خطأ في المعلومات = إقصاء محتمل"
  ];

  const importantNotes = [
    {
      title: "📝 الأوراق المطلوبة",
      content: "تقريباً نفسها كل عام، معناها تنجم تبدأ من توا تحضّر وتسكانـي. إذا الديبلوم مزال ما حضرش، تنجم تبعث شهادة نجاح. لازم تعمل نسخ رقمية واضحة (PDF)."
    },
    {
      title: "🎯 الاختيارات والدفع",
      content: "عندك الحق في 10 اختيارات. كل اختيار يكلّف 30 دينار. تحقق إذا بطاقة متاعك مازالت تخدم وتنجم تصب بيها Carte e-dinar jeune. إذا ما تخدمش، امشي للبوستة وجدّدها، أو طلب بطاقة جديدة."
    },
    {
      title: "✍️ الدقة في المعلومات",
      content: "وقت تعمّر المعطيات متاعك، رد بالك وقت تحط الأعداد والمعدلات. كل حاجة تكتبها باش تتقارن مع بطاقات الأعداد (Relevés de notes) اللي قدمتهم. إذا يصير أي غلط ولا تناقض بين اللي كتبتو والوثائق، تنجم تتقصى مباشرة من الترشّح."
    },
    {
      title: "⚠️ القبول الأولي",
      content: "إذا جاك ميساج القبول الأولي (présélectionné)، هذا ما يعنيش إنك تقبلت رسميًا. مازال لازم تهز الملف الورقي وتستنى الرد النهائي. برشا ناس تقبلت في الأول وبعد ما تقبلتش في الأخير، عادي جدًا."
    }
  ];

  return (
    <NavigationCard
      id="concours"
      title="Concours Spécifique"
      description="🏛️ المناظرة الخصوصية للمهندسين"
      icon={School}
    >
      {/* Introduction */}
      <Card className="border-secondary/20 bg-secondary/5 dark:bg-secondary/10 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-secondary">📌 ما هو؟</CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          <div className="text-sm space-y-4">
            <p>
              المناظرة الخصوصية للدخول لمدارس المهندسين هي فرصة للطلبة المتخرّجين من الإجازة ولا سنة أولى ماجستير باش ينجموا يدخلوا لل
              <span className="font-semibold">Cycle Ingénieur</span>: يعني يكمّلوا قرايتهم كمهندسين.
            </p>
            
            <div className="space-y-2 pr-4 border-r-2 border-primary/30">
              <div className="flex items-start gap-2">
                <span className="text-xl">👨‍🎓</span>
                <p className="pt-1">طلبة الإجازة ينجموا يترشّحوا لسنة أولى هندسة</p>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-xl">👩‍🎓</span>
                <p className="pt-1">طلبة الماجستير ينجموا يترشّحوا لسنة ثانية هندسة</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* First step */}
      <Card className="border-primary/20 bg-primary/5 dark:bg-primary/10 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            أول خطوة تعملها؟
          </CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          <p className="text-sm leading-relaxed mb-4">
            أدخل للجروب هذا، خاتر فيه تهبط <strong>المستجدّات الكل</strong>، وتنجم <strong>تسأل على راحتك</strong> وتلقى الرد إن شاء الله
          </p>
          
          <div className="w-full rounded-lg overflow-hidden mb-4 border border-muted">
            <img 
              src="/assets/images/concours.png" 
              alt="مجموعة المناظرة الخصوصية" 
              className="w-full h-auto" 
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="sm" asChild>
              <a href="https://csingenieur.inscription.tn/" target="_blank" rel="noopener noreferrer">
                📥 التقديم عبر المنصة
                <ExternalLink className="w-4 h-4 mr-2" />
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="https://www.facebook.com/share/g/1HVKR6Z14i/" target="_blank" rel="noopener noreferrer">
                📘 جروب المستجدات
                <Users className="w-4 h-4 mr-2" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

        {/* Steps */}
        <Card className="border-primary/20 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileCheck className="w-5 h-5" />
            مراحل الترشّح
            </CardTitle>
          </CardHeader>
          <CardContent dir="rtl">
          <div className="space-y-4">
              {steps.map((step, index) => (
              <div key={index} className="rounded-lg border border-border transition-colors duration-300">
                <div className="flex items-center gap-3 p-3 bg-muted/30 dark:bg-muted/10 border-b border-border transition-colors duration-300">
                  <Badge variant="secondary" className="min-w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </Badge>
                  <span className="font-medium">{step.title}</span>
                </div>
                <div className="p-3">
                  <p className="text-sm text-muted-foreground">{step.details}</p>
                </div>
                </div>
              ))}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg p-3 transition-colors duration-300">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                <strong>⚠️ مهم:</strong> الملف الورقي هو ملف واحد فقط، حتى كان عندك برشا اختيارات.
              </p>
            </div>
            </div>
          </CardContent>
        </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Score Calculation */}
        <Card className="border-accent/20 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent-foreground">
              <Calculator className="w-5 h-5" />
              حساب السكور
            </CardTitle>
          </CardHeader>
          <CardContent dir="rtl">
            <div className="space-y-4">
              <div className="bg-muted/50 dark:bg-muted/20 p-3 rounded-lg text-sm transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <strong className="block">كيفاش يتحسب السكور؟</strong>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    asChild
                  >
                    <a href="https://csingenieur.inscription.tn/PDF_ScoreE/Critères de Sélection des Candidats aux Concours Spécifiques-2024.pdf" target="_blank" rel="noopener noreferrer">
                      تفاصيل حساب السكور
                      <ExternalLink className="w-3 h-3 mr-1" />
                    </a>
                  </Button>
                </div>
                <ul className="space-y-2">
                  <li><strong>سكور A:</strong> يتم احتسابه أوتوماتيكياً من طرف الوزارة ويشمل: معدلاتك، الرتبة، الباك، الفرنسية، الإنجليزية، والعمر (أقل من 23 أو 24 يعطيك نقاط إضافية).</li>
                  <li><strong>سكور E:</strong> خاص ببعض المدارس، كل مدرسة تحدد طريقة الاحتساب والمواد المعنية.</li>
                </ul>
                <a 
              href="https://drive.google.com/drive/folders/1L0BbUCVmiF-MlI1jCgzUBCBIEYiRl-vR?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 p-3 bg-white dark:bg-gray-800 border border-border rounded-md hover:bg-accent/5 dark:hover:bg-accent/10 transition-colors duration-300 mt-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 87.3 78">
                    <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z" fill="#0066da"/>
                    <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.45l16.2-28z" fill="#00ac47"/>
                    <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.5L73.55 76.8z" fill="#ea4335"/>
                    <path d="M43.65 25L57.4 1.2c-1.35-.8-2.9-1.2-4.5-1.2H34.4c-1.6 0-3.15.45-4.5 1.2l14.25 23.8z" fill="#00832d"/>
                    <path d="M59.5 53H87.3c0-1.55-.4-3.1-1.2-4.5l-5.4-9.35-8.05-13.95c-.8-1.4-1.95-2.5-3.3-3.3L43.65 53h15.85z" fill="#2684fc"/>
                    <path d="M73.55 76.8L59.5 53H43.65L29.9 76.8c1.35.8 2.9 1.2 4.5 1.2h34.65c1.6 0 3.15-.45 4.5-1.2z" fill="#ffba00"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">باش تلقى أغلب الفورمولات متاع سكور E في الرابط هذا</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
              </div>
              
              <div className="bg-secondary/10 dark:bg-secondary/20 p-3 rounded-lg text-sm transition-colors duration-300">
                <strong className="block mb-2">الحد الأدنى:</strong>
                <ul className="space-y-1 list-disc pl-5">
                  <li>للترشح للسنة <strong>الأولى هندسة</strong>، لازم يكون السكور متاعك <strong>أكثر من 40 نقطة</strong></li>
                  <li>للترشح للسنة <strong>الثانية هندسة</strong>، لازم يكون السكور متاعك <strong>أكثر من 60 نقطة</strong></li>
                  <li>السكور يتحسب <strong>آليًا</strong> على المنصة وقت تعمّر المعطيات</li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium mb-2">أدوات لحساب السكور:</h5>
              <div className="space-y-2">
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
            </div>
          </CardContent>
        </Card>

      {/* Required Documents */}
      <Card className="border-primary/20 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <FileCheck className="w-5 h-5" />
            الوثائق المطلوبة
          </CardTitle>
        </CardHeader>
          <CardContent dir="rtl">
            <div className="space-y-4">
              <div className="grid gap-2">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 dark:bg-muted/20 transition-colors duration-300">
                <span className="text-sm">{doc}</span>
                    {index === 5 && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mr-auto"
                        asChild
                      >
                        <a 
                          href="/assets/documents/ملحق المناظرات الخصوصية - سنة أولى دورة سنة 2024.pdf" 
                          download
                        >
                          <FileCheck className="w-4 h-4 mr-2" />
                          تحميل الملحق
                        </a>
                      </Button>
                    )}
              </div>
            ))}
          </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg p-3 transition-colors duration-300">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                <strong>⚠️ ملاحظة :</strong> أوراق السنة الثانية تختلف عن السنة الأولى، تأكد من الوثائق في الموقع الرسمي قبل التقديم.

              </p>
            </div>
    
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="https://csingenieur.inscription.tn" target="_blank" rel="noopener noreferrer">
                  الموقع الرسمي للمناظرة
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Check Available Concours */}
      <Card className="border-accent/20 bg-blue-50/50 dark:bg-blue-900/10 transition-colors duration-300">
        <CardHeader className="bg-blue-100/30 dark:bg-blue-800/20 border-b border-blue-200/30 dark:border-blue-700/30 transition-colors duration-300">
          <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <Search className="w-5 h-5" />
            معلومة مهمة!
          </CardTitle>
        </CardHeader>
        <CardContent dir="rtl" className="pt-4">
          <p className="text-sm mb-4">
            في الموقع <a href="https://csingenieur.inscription.tn/procedure" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://csingenieur.inscription.tn</a>: تلقى أداة اسمها 
            <strong className="mx-1">"Vérifier les concours disponibles pour mon profil"</strong>
            تعطيك شنوما الشعب اللي تنجم تقدملهم حسب الاختصاص متاعك.
          </p>
          <div className="grid gap-4">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://csingenieur.inscription.tn/procedure" target="_blank" rel="noopener noreferrer">
                تحقق من المناظرات المتاحة لاختصاصك
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            
           
          </div>
        </CardContent>
      </Card>

      {/* Types of Concours */}
      <Card className="border-secondary/20 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <School className="w-5 h-5" />
            أنواع المناظرات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4" dir="rtl">
          <div className="space-y-6">
          {concoursTypes.map((type, index) => (
            <div key={index} className="border-r-4 border-secondary pr-4">
              <h4 className="font-semibold text-secondary">{type.title}</h4>
                <p className="text-sm text-muted-foreground my-2">{type.details}</p>
                
              {type.types ? (
                  <div className="mt-2">
                    <p className="font-medium text-sm mb-1">⬇️ الجامعات تتقسم لزوز أنواع:</p>
                    <ul className="text-sm space-y-1 pl-4">
                  {type.types.map((t, i) => (
                        <li key={i} className="list-disc">
                      {t}
                    </li>
                  ))}
                </ul>
                  </div>
              ) : (
                  <>
                    <p className="text-sm font-medium mb-1">🎓 جامعات كيما:</p>
                <p className="text-sm text-muted-foreground">{type.examples}</p>
                    
                    {type.link && (
                      <Button variant="outline" size="sm" className="mt-2 flex-wrap text-wrap whitespace-normal h-auto py-2" asChild>
                        <a href={type.link} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2">
                          <span>ملحقات يختلفو من كلية لكلية، وها الرابط متاع Google Drive فيه أغلبهم</span>
                          <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        </span>
                        </a>
                      </Button>
                    )}
                  </>
                )}
              </div>
            ))}
             {/* Important Final Note */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg p-4 transition-colors duration-300" dir="rtl">
        <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          ملاحظة مهمة
        </h4>
        <p className="text-sm text-amber-700 dark:text-amber-400">
          تابع صفحات المدارس الرسمية لمعرفة مواعيد وبلاغات المناظرات. المدارس تنشر التفاصيل في صفحاتهم الرسمية على فيسبوك، تابعهم من توا.
        </p>
      </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Dates */}
      <Card className="border-primary/20 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Calendar className="w-5 h-5" />
            مواعيد مهمة
          </CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          <div className="space-y-4">
            <div className="bg-muted/30 dark:bg-muted/20 p-3 rounded-lg transition-colors duration-300">
              <h4 className="font-medium flex items-center gap-2">
                <Clock className="w-4 h-4" /> متى تنشر البلاغات؟
              </h4>
              <ul className="mt-2 space-y-1 text-sm pl-5">
                <li className="list-disc">بين أواخر جويلية و بداية أوت</li>
                <li className="list-disc">تلقى فيهم: شروط الترشح، الأوراق المطلوبة، الاختصاصات، طاقة الاستيعاب</li>
                <li className="list-disc">النتائج تخرج عادة بين 20 و 31 أوت</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 p-3 rounded-lg transition-colors duration-300">
              <h4 className="font-medium flex items-center gap-2">
                <PieChart className="w-4 h-4" /> نتائج العام اللي فات
              </h4>
              <p className="text-sm mt-2">
                تنجم تطلّع على نتائج العام اللي فات تاخو فكرة على السكورات اللي تقبلوا بيهم لكل شعبة ولكل مدرسة.
              </p>

              <a 
                href="https://www.facebook.com/share/p/1DmMsWLHCG/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-3 border border-border rounded-md overflow-hidden bg-card transition-all hover:bg-accent/5 dark:hover:bg-accent/10"
              >
                <div className="flex items-stretch">
                  <div className="w-3 bg-blue-600 dark:bg-blue-500"></div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </div>
                      <div>
                        <p className="font-medium text-sm">نتائج المناظرة الخصوصية 2024/2025</p>
                        <p className="text-xs text-muted-foreground">facebook.com</p>
                      </div>
                    </div>
                    <div className="mt-2 border-t border-border pt-2 flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">شوف نتائج 2024/2025</p>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </a>
              
              <a 
                href="https://www.facebook.com/share/p/1DriEeJsqT/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-3 border border-border rounded-md overflow-hidden bg-card transition-all hover:bg-accent/5 dark:hover:bg-accent/10"
              >
                <div className="flex items-stretch">
                  <div className="w-3 bg-blue-600 dark:bg-blue-500"></div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </div>
                      <div>
                        <p className="font-medium text-sm">نتائج المناظرة الخصوصية 2023/2024</p>
                        <p className="text-xs text-muted-foreground">facebook.com</p>
                      </div>
                    </div>
                    <div className="mt-2 border-t border-border pt-2 flex justify-between items-center">
                      <p className="text-xs text-muted-foreground">شوف نتائج 2023/2024</p>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="border-secondary/20 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <AlertTriangle className="w-5 h-5" />
            ملاحظات مهمّة قبل الترشّح
          </CardTitle>
        </CardHeader>
        <CardContent dir="rtl">
          {importantNotes.map((note, index) => (
            <div 
              key={index} 
              className={`p-4 mb-4 rounded-lg border-l-4 transition-colors duration-300 ${
                index === 0 ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-400" : 
                index === 1 ? "bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-400" : 
                index === 2 ? "bg-purple-50 dark:bg-purple-900/20 border-purple-500 dark:border-purple-400" : 
                "bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-400"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full transition-colors duration-300 ${
                  index === 0 ? "bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300" : 
                  index === 1 ? "bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-300" : 
                  index === 2 ? "bg-purple-100 dark:bg-purple-800/50 text-purple-600 dark:text-purple-300" : 
                  "bg-red-100 dark:bg-red-800/50 text-red-600 dark:text-red-300"
                }`}>
                  {index === 0 ? (
                    <FileCheck className="w-5 h-5" />
                  ) : index === 1 ? (
                    <Calculator className="w-5 h-5" />
                  ) : index === 2 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-base mb-2 text-foreground">{note.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {note.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
              
              
            </CardContent>
          </Card>
     
    </NavigationCard>
  );
};

export default ConcoursSection;