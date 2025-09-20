import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BiomarkerCard } from "./BiomarkerCard";
import { Activity, Heart, Droplets, Zap, Shield, TrendingUp } from "lucide-react";

// Sample biomarker data
const biomarkers = [
  {
    name: "Hemoglobin",
    value: 12.5,
    unit: "g/dL",
    normalRange: "12.0-15.5",
    status: "normal" as const,
    trend: "stable" as const,
    description: "Hemoglobin carries oxygen throughout your body. Your level is within normal range.",
    recommendation: "Maintain a balanced diet rich in iron and vitamin C."
  },
  {
    name: "Total Cholesterol",
    value: 220,
    unit: "mg/dL",
    normalRange: "<200",
    status: "high" as const,
    trend: "up" as const,
    description: "Your cholesterol is elevated, which may increase cardiovascular risk.",
    recommendation: "Consider dietary changes and discuss statins with your doctor."
  },
  {
    name: "Blood Glucose",
    value: 85,
    unit: "mg/dL",
    normalRange: "70-100",
    status: "normal" as const,
    trend: "stable" as const,
    description: "Your fasting glucose is excellent, indicating good metabolic health.",
    recommendation: "Continue current lifestyle and monitor regularly."
  },
  {
    name: "Vitamin D",
    value: 15,
    unit: "ng/mL",
    normalRange: "30-100",
    status: "low" as const,
    trend: "down" as const,
    description: "Vitamin D deficiency can affect bone health and immune function.",
    recommendation: "Increase sun exposure and consider vitamin D3 supplements."
  },
  {
    name: "Creatinine",
    value: 2.5,
    unit: "mg/dL",
    normalRange: "0.6-1.2",
    status: "critical" as const,
    trend: "up" as const,
    description: "Elevated creatinine may indicate kidney function issues.",
    recommendation: "Consult nephrologist immediately for kidney function evaluation."
  },
  {
    name: "Thyroid (TSH)",
    value: 2.1,
    unit: "mIU/L",
    normalRange: "0.4-4.0",
    status: "normal" as const,
    trend: "stable" as const,
    description: "Your thyroid function is normal, supporting healthy metabolism.",
    recommendation: "Continue monitoring annually as part of routine care."
  }
];

export const HealthDashboard = () => {
  const overallScore = 72;
  const riskLevel = "Moderate";
  
  const criticalCount = biomarkers.filter(b => b.status === "critical").length;
  const highWarningCount = biomarkers.filter(b => b.status === "high" || b.status === "low").length;
  const normalCount = biomarkers.filter(b => b.status === "normal").length;

  return (
    <div className="space-y-8">
      {/* Overall Health Score */}
      <Card className="bg-gradient-card shadow-medical">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-primary" />
            <span>Overall Health Assessment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Health Score</p>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-primary">{overallScore}</span>
                <span className="text-lg text-muted-foreground">/100</span>
              </div>
              <Progress value={overallScore} className="h-3" />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Risk Level</p>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {riskLevel}
              </Badge>
              <p className="text-xs text-muted-foreground">
                Based on biomarker analysis
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Quick Summary</p>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span>{normalCount} Normal</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <span>{highWarningCount} Warning</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <span>{criticalCount} Critical</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Health Insights */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Key Health Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-success-light">
              <Heart className="h-8 w-8 text-success" />
              <div>
                <p className="font-medium text-success-foreground">Cardiovascular</p>
                <p className="text-sm text-success">Needs Attention</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary-light">
              <Droplets className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium text-primary-foreground">Hydration</p>
                <p className="text-sm text-primary">Good</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-warning-light">
              <Zap className="h-8 w-8 text-warning" />
              <div>
                <p className="font-medium text-warning-foreground">Energy</p>
                <p className="text-sm text-warning">Low Vitamin D</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-destructive-light">
              <Shield className="h-8 w-8 text-destructive" />
              <div>
                <p className="font-medium text-destructive-foreground">Kidney</p>
                <p className="text-sm text-destructive">Urgent Care</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Biomarker Analysis */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Detailed Biomarker Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {biomarkers.map((biomarker, index) => (
            <BiomarkerCard
              key={index}
              {...biomarker}
            />
          ))}
        </div>
      </div>
    </div>
  );
};