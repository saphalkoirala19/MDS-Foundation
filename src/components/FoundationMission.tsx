import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Megaphone, BookOpen, Shield, Globe } from "lucide-react";

export const FoundationMission = () => {
  const features = [
    {
      icon: Heart,
      title: "Fighting for People",
      description: "Advocating for the rights and dignity of every individual in Nepal."
    },
    {
      icon: Users,
      title: "Act for Homeless",
      description: "Supporting vulnerable communities and providing assistance to those in need."
    },
    {
      icon: Shield,
      title: "Respect & Integrating",
      description: "Promoting respect, unity, and integration across all communities."
    },
    {
      icon: Globe,
      title: "Support Homeless People",
      description: "Creating sustainable solutions for homelessness and poverty."
    },
    {
      icon: Megaphone,
      title: "Quick Fundraising",
      description: "Efficiently mobilizing resources for urgent humanitarian causes."
    },
    {
      icon: BookOpen,
      title: "Education & Awareness",
      description: "Spreading knowledge about democracy, human rights, and civic duties."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                About MDS Foundation
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy leading-tight">
                Our Purpose & 
                <span className="text-primary block">Commitment</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To honor the legacy of Martyr Dharma Bhakta Mathema by promoting human rights, democratic values, and social awareness across Nepal. We empower communities through education, media, and advocacy—working toward a just, inclusive, and informed society.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">People Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50k</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Programs Completed</div>
              </div>
            </div>

            <Button variant="foundation" size="lg" asChild>
              <Link to="/about">Discover More</Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foundation-navy">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};