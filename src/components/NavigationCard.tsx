import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  id?: string;
  children: React.ReactNode;
}

const NavigationCard = ({
  title,
  description,
  icon: Icon,
  id,
  children
}: NavigationCardProps) => {
  return (
    <Card id={id} className="border-primary/20 shadow-card transition-colors duration-300">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default NavigationCard;