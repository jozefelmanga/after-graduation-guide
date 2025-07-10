import { BookOpen, School, Briefcase, StickyNote, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const NavigationBar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">What's Next?</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('master')}
              className="flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Master
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('concours')}
              className="flex items-center gap-2"
            >
              <School className="w-4 h-4" />
              Concours
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('alternance')}
              className="flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Alternance
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('notes')}
              className="flex items-center gap-2"
            >
              <StickyNote className="w-4 h-4" />
              ملاحظات
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection('main-content')}
            >
              القائمة
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;