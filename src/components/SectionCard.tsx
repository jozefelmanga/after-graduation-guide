import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionCardProps {
  title: string;
  description: string;
  summary: string;
  icon: LucideIcon;
  path: string;
}

const SectionCard = ({ title, description, icon: Icon, path, summary }: SectionCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all duration-300 hover:border-primary/30">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4" dir="rtl">
          {summary}
        </p>
        
        <Button className="w-full" asChild>
          <Link to={path}>تفاصيل أكثر</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SectionCard; 