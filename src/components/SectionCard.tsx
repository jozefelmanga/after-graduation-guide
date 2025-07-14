import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionCardProps {
  title: string;
  description: string;
  summary: string;
  icon: LucideIcon;
  path: string;
}

const SectionCard = ({ title, description, summary, icon: Icon, path }: SectionCardProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary/50 dark:hover:border-primary/70 transition-all duration-300 hover:shadow-card">
      <CardHeader className="bg-gradient-card dark:bg-card pb-0">
        <Link to={path} className="flex items-start gap-3">
          <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </Link>
      </CardHeader>
      
      <CardContent className="pt-4" dir="rtl">
        <p className="text-sm text-muted-foreground">{summary}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link 
          to={path} 
          className="text-sm font-medium text-primary hover:text-primary/90 flex items-center transition-colors"
        >
          اكتشف المزيد
          <span className="ml-1">←</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SectionCard; 