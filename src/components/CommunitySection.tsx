import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CommunitySection = () => {
  const communityGroups = [
    {
      title: "Young Adults (18-25)",
      members: "2,341 members",
      description: "Navigating early adulthood together",
      tags: ["Support", "Social", "Events"]
    },
    {
      title: "Working Professionals",
      members: "1,892 members", 
      description: "Balancing career and personal connections",
      tags: ["Networking", "Work-life", "Meetups"]
    },
    {
      title: "New Parents",
      members: "956 members",
      description: "Finding community in parenthood",
      tags: ["Family", "Support", "Advice"]
    },
    {
      title: "Senior Circle",
      members: "1,234 members",
      description: "Wisdom sharing and friendship",
      tags: ["Experience", "Stories", "Activities"]
    },
    {
      title: "Creative Minds",
      members: "1,567 members",
      description: "Artists, writers, and creative souls",
      tags: ["Art", "Writing", "Creativity"]
    },
    {
      title: "Mental Health Warriors",
      members: "3,245 members",
      description: "Supporting each other through challenges",
      tags: ["Mental Health", "Recovery", "Hope"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your Tribe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Join communities that understand you. Connect with people who share your 
            experiences, interests, and journey toward meaningful relationships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communityGroups.map((group, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-warm transition-smooth hover:-translate-y-1 border border-border/50 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {group.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">
                    {group.members}
                  </p>
                  <p className="text-muted-foreground text-sm text-balance">
                    {group.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary-soft text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full transition-smooth hover:bg-primary hover:text-primary-foreground"
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="default" size="lg" className="transition-bounce">
            Browse All Communities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;