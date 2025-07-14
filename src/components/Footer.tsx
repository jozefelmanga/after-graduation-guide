import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/90 dark:bg-gray-900 border-t border-primary-foreground/10 dark:border-border py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <Heart className="h-5 w-5 text-white" />
              <span>Made with love by</span>
            </div>
            <a 
              href="https://linktr.ee/Youssef_Ben_Salem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-lg font-medium text-white hover:text-white/80 transition-colors"
            >
              Youssef Ben Salem
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="text-sm space-y-2 text-white/90" dir="rtl">
            <p>هذا الدليل تم إعداده بحب وعناية لمساعدة الطلبة التونسيين</p>
            <p>إذا ساعدك المحتوى، شاركه مع أصحابك 🫶</p>
          </div>
          
          <div className="pt-4 border-t border-white/20 dark:border-white/10">
            <p className="text-xs text-white/70">
              © 2025 After Graduation Guide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;