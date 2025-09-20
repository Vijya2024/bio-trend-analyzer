import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

interface BiomarkerCardProps {
  name: string;
  value: number;
  unit: string;
  normalRange: string;
  status: "normal" | "high" | "low" | "critical";
  trend: "up" | "down" | "stable";
  description: string;
  recommendation?: string;
}

export const BiomarkerCard = ({
  name,
  value,
  unit,
  normalRange,
  status,
  trend,
  description,
  recommendation
}: BiomarkerCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "normal": return "text-success";
      case "high": return "text-warning";
      case "low": return "text-warning";
      case "critical": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadgeVariant = () => {
    switch (status) {
      case "normal": return "default";
      case "high": case "low": return "secondary";
      case "critical": return "destructive";
      default: return "outline";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "normal": return <CheckCircle className="h-4 w-4 text-success" />;
      case "high": case "low": return <AlertTriangle className="h-4 w-4 text-warning" />;
      case "critical": return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return null;
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4" />;
      case "down": return <TrendingDown className="h-4 w-4" />;
      case "stable": return <Minus className="h-4 w-4" />;
    }
  };

  const getProgressValue = () => {
    // This is a simplified calculation for demo purposes
    if (status === "normal") return 75;
    if (status === "high" || status === "low") return 45;
    if (status === "critical") return 20;
    return 50;
  };

  const getProgressColor = () => {
    switch (status) {
      case "normal": return "bg-success";
      case "high": case "low": return "bg-warning";
      case "critical": return "bg-destructive";
      default: return "bg-primary";
    }
  };

  return (
    <Card className="shadow-card hover:shadow-medical transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <Badge variant={getStatusBadgeVariant()} className="capitalize">
              {status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className={`text-2xl font-bold ${getStatusColor()}`}>
                {value}
              </span>
              <span className="text-sm text-muted-foreground">{unit}</span>
              <div className="flex items-center text-muted-foreground">
                {getTrendIcon()}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Normal range: {normalRange}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Health Score</span>
            <span className={getStatusColor()}>{getProgressValue()}%</span>
          </div>
          <Progress 
            value={getProgressValue()} 
            className="h-2"
            style={{
              background: `hsl(var(--muted))`,
            }}
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-foreground">{description}</p>
          {recommendation && (
            <div className="p-3 rounded-lg bg-accent/50 border border-accent">
              <p className="text-sm font-medium text-accent-foreground">
                💡 Recommendation
              </p>
              <p className="text-sm text-accent-foreground mt-1">
                {recommendation}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};