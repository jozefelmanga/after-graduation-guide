import { Heart, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-300" />
            <span className="text-lg font-medium">Made with love by</span>
          </div>
          
          <Button
            variant="secondary"
            size="lg"
            className="mb-6"
            asChild
          >
            <a href="https://linktr.ee/Youssef_Ben_Salem" target="_blank" rel="noopener noreferrer">
              Youssef Ben Salem
              <ExternalLink className="w-4 h-4 mr-2" />
            </a>
          </Button>
          
          <div className="text-sm opacity-80 space-y-2" dir="rtl">
            <p>هذا الدليل تم إعداده بحب وعناية لمساعدة الطلبة التونسيين</p>
            <p>إذا ساعدك المحتوى، شاركه مع أصحابك 🫶</p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-primary-foreground/20">
            <p className="text-xs opacity-60">
              © 2025 What's Next Guide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;