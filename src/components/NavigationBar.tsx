import { BookOpen, School, Briefcase, GraduationCap, Home, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NavigationBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-foreground">After Graduation Guide</span>
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

            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="ml-2">القائمة</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              className="w-full flex items-center justify-start gap-2"
              asChild
            >
              <Link to="/" onClick={closeMobileMenu}>
                <Home className="w-4 h-4" />
                الرئيسية
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full flex items-center justify-start gap-2"
              asChild
            >
              <Link to="/master" onClick={closeMobileMenu}>
                <BookOpen className="w-4 h-4" />
                Master
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full flex items-center justify-start gap-2"
              asChild
            >
              <Link to="/concours" onClick={closeMobileMenu}>
                <School className="w-4 h-4" />
                Concours
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full flex items-center justify-start gap-2"
              asChild
            >
              <Link to="/alternance" onClick={closeMobileMenu}>
                <Briefcase className="w-4 h-4" />
                Alternance
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;