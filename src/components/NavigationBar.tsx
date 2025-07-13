import { BookOpen, School, Briefcase, GraduationCap, Home } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">What's Next?</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4" />
                الرئيسية
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              asChild
            >
              <Link to="/master">
                <BookOpen className="w-4 h-4" />
                Master
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              asChild
            >
              <Link to="/concours">
                <School className="w-4 h-4" />
                Concours
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              asChild
            >
              <Link to="/alternance">
                <Briefcase className="w-4 h-4" />
                Alternance
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link to="/">
                القائمة
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;