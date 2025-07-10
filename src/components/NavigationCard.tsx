import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
  id: string;
}

const NavigationCard = ({ title, description, icon: Icon, children, id }: NavigationCardProps) => {
  return (
    <div id={id} className="bg-gradient-card backdrop-blur-sm rounded-xl shadow-card p-8 border border-white/20 hover:shadow-elevated transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

export default NavigationCard;