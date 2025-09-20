import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReportUpload } from "@/components/ReportUpload";
import { HealthDashboard } from "@/components/HealthDashboard";
import { Stethoscope, Brain, Shield, TrendingUp, FileText, Sparkles } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">HealthInsight AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">About</Button>
            <Button variant="ghost" size="sm">Privacy</Button>
            <Button variant="default" size="sm" className="bg-gradient-primary border-0">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {!showDashboard ? (
        <>
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-light/20 to-background"></div>
            <div className="container mx-auto px-4 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-primary-light px-4 py-2 rounded-full">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">AI-Powered Health Analysis</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                      Transform Your
                      <span className="bg-gradient-primary bg-clip-text text-transparent"> Medical Reports</span>
                      Into Actionable Insights
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Upload your blood tests, urine tests, and other medical reports to get instant AI-powered analysis, 
                      health risk assessments, and personalized recommendations.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary border-0 text-lg px-8 py-4"
                      onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Analyze My Report
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-lg px-8 py-4"
                      onClick={() => setShowDashboard(true)}
                    >
                      View Sample Analysis
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Medical technology and health analysis visualization"
                    className="w-full h-auto rounded-2xl shadow-medical"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-card">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Advanced Health Intelligence
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our AI analyzes your biomarkers to provide comprehensive health insights
                  that both patients and doctors can understand and act upon.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4 p-6">
                  <div className="mx-auto p-4 rounded-full bg-primary-light w-16 h-16 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">AI-Powered Analysis</h3>
                  <p className="text-muted-foreground">
                    Advanced algorithms interpret complex biomarker patterns and correlations
                    to identify potential health risks and trends.
                  </p>
                </div>

                <div className="text-center space-y-4 p-6">
                  <div className="mx-auto p-4 rounded-full bg-success-light w-16 h-16 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Predictive Insights</h3>
                  <p className="text-muted-foreground">
                    Get early warnings about emerging health conditions and track
                    your biomarker trends over time.
                  </p>
                </div>

                <div className="text-center space-y-4 p-6">
                  <div className="mx-auto p-4 rounded-full bg-warning-light w-16 h-16 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-warning" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Personalized Recommendations</h3>
                  <p className="text-muted-foreground">
                    Receive tailored health advice and actionable steps to improve
                    your biomarker levels and overall wellness.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Upload Section */}
          <section id="upload-section" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Get Started in Seconds
                </h2>
                <p className="text-xl text-muted-foreground">
                  Upload your medical report and receive comprehensive health insights instantly
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <ReportUpload />
                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary border-0"
                    onClick={() => setShowDashboard(true)}
                  >
                    Analyze Report
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Health Analysis Report</h1>
              <p className="text-muted-foreground">Comprehensive biomarker analysis and health insights</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowDashboard(false)}
            >
              Upload New Report
            </Button>
          </div>
          <HealthDashboard />
        </div>
      )}
    </div>
  );
};

export default Index;