import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users2, Radio, Mic } from "lucide-react";
import { ProgramModal } from "./ProgramModal";
import { useState } from "react";

export const WhatWeDo = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const services = [
    {
      icon: Award,
      title: "Honoring a National Hero",
      description: "We are inspired by the legacy of Martyr Dharma Bhakta Mathema, a pioneer in Nepal's democratic movement...",
      fullDescription: `Martyr Dharma Bhakta Mathema was a visionary leader and pioneer of Nepal's democratic movement. Born in Lalitpur, he dedicated his life to fighting for democracy, freedom, and human rights in Nepal.

Our foundation honors his sacrifice by:
• Preserving his historical legacy and teachings
• Promoting democratic values in communities
• Educating youth about Nepal's democratic history
• Supporting initiatives that align with his vision
• Organizing memorial events and programs

Through our work, we ensure that his sacrifice continues to inspire future generations to uphold democratic principles, human rights, and social justice in Nepal.`,
      href: "/about"
    },
    {
      icon: Users2,
      title: "Promoting Human Rights & Democracy",
      description: "We educate and engage communities across Nepal on issues of human rights, democracy, and freedom...",
      fullDescription: `Our human rights and democracy programs focus on empowering communities with knowledge and tools to protect their fundamental rights and participate actively in democratic processes.

Key initiatives include:
• Human rights awareness workshops in rural areas
• Democracy education programs for youth
• Legal literacy campaigns
• Women's rights advocacy
• Community dialogue sessions on civic responsibilities
• Voter education and electoral awareness

We work closely with local communities, schools, and organizations to ensure that every citizen understands their rights and responsibilities in a democratic society.`,
      href: "/save-more-lives"
    },
    {
      icon: Radio,
      title: "Empowering Through Media & Outreach",
      description: "From community radio in Bhojpur to national awareness campaigns, we use the power of media...",
      fullDescription: `Our media and outreach programs leverage various communication channels to spread awareness about democratic values and human rights across Nepal.

Our media initiatives include:
• Community radio station in Bhojpur District
• Educational content creation and distribution
• Digital media campaigns for social awareness
• Documentary production on democratic movements
• Podcast series on human rights topics
• Print materials in local languages

These programs ensure that even remote communities have access to vital information about their rights, democratic processes, and social development opportunities.`,
      href: "/programs/community-radio"
    },
    {
      icon: Mic,
      title: "Voicing the Future Generation",
      description: "Through programs like \"Children with the Prime Minister\" and \"Children with the President\", we give...",
      fullDescription: `Our youth engagement programs create platforms for young people to express their views, learn about governance, and participate in democratic processes.

Featured programs:
• "Children with the Prime Minister" - Direct dialogue opportunities
• "Children with the President" - Youth interaction sessions
• School debate competitions on democratic themes
• Youth leadership development workshops
• Student government training programs
• Young reporters and citizen journalism initiatives

These programs help develop informed, engaged citizens who will lead Nepal's democratic future with knowledge, confidence, and commitment to human rights.`,
      href: "/programs/children-prime-minister"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            What we do
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy">
            We Believe that We can Save 
            <span className="text-primary block">More Lives with You</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foundation-navy group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                    onClick={() => setSelectedProgram(index)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Program Modal */}
        {selectedProgram !== null && (
          <ProgramModal
            isOpen={selectedProgram !== null}
            onClose={() => setSelectedProgram(null)}
            title={services[selectedProgram].title}
            description={services[selectedProgram].description}
            fullDescription={services[selectedProgram].fullDescription}
            icon={services[selectedProgram].icon}
          />
        )}
      </div>
    </section>
  );
};