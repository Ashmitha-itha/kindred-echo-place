import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Phone, Globe, Calendar } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: Phone,
      title: "Crisis Hotlines",
      description: "Immediate help when you need it most",
      link: "988 Suicide & Crisis Lifeline"
    },
    {
      icon: BookOpen,
      title: "Self-Help Guides",
      description: "Practical tools for managing loneliness",
      link: "Browse Resources"
    },
    {
      icon: Globe,
      title: "Online Therapy",
      description: "Professional support from licensed therapists",
      link: "Find Therapists"
    },
    {
      icon: Calendar,
      title: "Local Events",
      description: "Meet people in your community",
      link: "Upcoming Events"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources & Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Access professional resources, emergency support, and practical tools 
            to help you on your journey toward connection and wellbeing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-warm transition-smooth hover:-translate-y-1 border border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <resource.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-lg text-foreground">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4 text-balance">
                  {resource.description}
                </p>
                <Button variant="outline" size="sm" className="transition-smooth">
                  {resource.link}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Need Immediate Help?
          </h3>
          <p className="text-muted-foreground mb-6">
            If you're in crisis or having thoughts of self-harm, please reach out immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="destructive" size="lg" className="transition-smooth">
              Call 988 (US Crisis Line)
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth">
              Emergency Chat Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;