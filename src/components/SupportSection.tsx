import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, MessageCircle, Shield } from "lucide-react";

const SupportSection = () => {
  const supportFeatures = [
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Connect with trained listeners and peer supporters who understand what you're going through."
    },
    {
      icon: Users,
      title: "Community Groups",
      description: "Join supportive groups based on your interests, location, or shared experiences."
    },
    {
      icon: MessageCircle,
      title: "24/7 Chat Support",
      description: "Access immediate support through our crisis chat when you need someone to talk to."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Your privacy and safety are our top priorities in this judgment-free space."
    }
  ];

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Support When You Need It
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We believe everyone deserves connection and support. Our platform offers multiple ways 
            to find help and build meaningful relationships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-warm transition-smooth hover:-translate-y-2 border-0 gradient-warm"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-balance">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;