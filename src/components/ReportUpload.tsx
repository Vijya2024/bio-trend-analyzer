import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ReportUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file && (file.type === "application/pdf" || file.name.endsWith('.pdf'))) {
      setUploadedFile(file);
      toast({
        title: "Report uploaded successfully",
        description: `${file.name} is ready for analysis`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF medical report",
        variant: "destructive",
      });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "Report uploaded successfully",
        description: `${file.name} is ready for analysis`,
      });
    }
  };

  return (
    <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors shadow-card">
      <CardContent className="p-12">
        <div
          className={`relative flex flex-col items-center justify-center space-y-6 text-center transition-colors ${
            isDragOver ? "bg-accent/50" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!uploadedFile ? (
            <>
              <div className="p-6 rounded-full bg-primary-light">
                <Upload className="h-12 w-12 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Upload Your Medical Report
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Drag and drop your blood test, urine test, or other medical reports here,
                  or click to browse files
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default"
                  className="bg-gradient-primary border-0"
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  Choose File
                </Button>
                <input
                  id="file-input"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Supports PDF files up to 10MB
              </p>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-success-light">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium">{uploadedFile.name}</span>
                </div>
                <p className="text-sm text-success">Ready for analysis</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setUploadedFile(null)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};