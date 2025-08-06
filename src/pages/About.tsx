import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import aboutImage1 from "@/assets/about us 1.jpg";
import aboutImage2 from "@/assets/aboutus2.jpg";
import presidentImg from "@/assets/SanketKoirala.jpeg";
import vpImg from "@/assets/GyanAcharya.jpeg";
import generalSecretaryImg from "@/assets/HariNeupane.jpeg";
import treasurerImg from "@/assets/laxmansharma.jpeg";
import advisorImg from "@/assets/PrameshKC.jpeg";
import advisorImg1 from "@/assets/AmarSinghPun.jpeg";
import patronImg from "@/assets/SankharKoirala.jpeg";
import member1Img from "@/assets/SaujanyaKoirala.jpeg";
import member2Img from "@/assets/SarojDarnal.jpeg";
import { Award, Users2, Radio, Mic } from "lucide-react";
import { MemberTooltip } from "@/components/MemberTooltip";

const boardMembers = [
  {
    name: "Shanker Prasad Koirala",
    position: "Patron",
    image: patronImg,
    description: "Patron of the foundation, providing guidance and support."
  },
  {
    name: "Pramesh KC",
    position: "Advisor",
    image: advisorImg,
    description: "Advisor to the board, offering strategic advice."
  },
  {
    name: "Amar Singh Pun",
    position: "Advisor",
    image: advisorImg1,
    description: "Advisor to the board, offering strategic advice."
  }
];

const awesomeBoardMembers = [
    {
    name: "Sanket Koirala",
    position: "President",
    image: presidentImg,
    description: "President of the foundation, leading the organization."
  },
  {
    name: "Gyan Prasad Acharya",
    position: "Vice-president",
    image: vpImg,
    description: "Vice-president, assisting the president in all activities."
  },
  {
    name: "Hari Neupane",
    position: "General Secretary",
    image: generalSecretaryImg,
    description: "General Secretary, responsible for administration."
  },
  {
    name: "Laxman Sharma",
    position: "Treasurer",
    image: treasurerImg,
    description: "Treasurer, managing the foundation's finances."
  },
  {
    name: "Saujanya Koirala",
    position: "Member",
    image: member1Img,
    description: "Active member contributing to various projects."
  },
  {
    name: "Saroj Darnal",
    position: "Member",
    image: member2Img,
    description: "Active member supporting community outreach."
  },
];

const services = [
  {
    icon: Award,
    title: "Honoring a National Hero",
    description: "We are inspired by the legacy of Martyr Dharma Bhakta Mathema, a pioneer in Nepal's democratic movement..."
  },
  {
    icon: Users2,
    title: "Promoting Human Rights & Democracy",
    description: "We educate and engage communities across Nepal on issues of human rights, democracy, and freedom..."
  },
  {
    icon: Radio,
    title: "Empowering Through Media & Outreach",
    description: "From community radio in Bhojpur to national awareness campaigns, we use the power of media..."
  },
  {
    icon: Mic,
    title: "Voicing the Future Generation",
    description: "Through programs like \"Children with the Prime Minister\" and \"Children with the President\", we give..."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb Hero */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foundation-navy">About Us</h1>
              <nav className="text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span>About Us</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                    About MDS Foundation
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy leading-tight">
                    Our Mission Is to Change 
                    <span className="text-primary block">The World</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To honor the legacy of Martyr Dharma Bhakta Mathema by promoting human rights, democratic values, and social awareness across Nepal. We empower communities through education, media, and advocacy—working toward a just, inclusive, and informed society.
                  </p>
                </div>

                <Button variant="foundation" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src={aboutImage1} 
                  alt="About Us 1" 
                  className="rounded-lg shadow-card-foundation w-full h-64 object-cover"
                />
                <img 
                  src={aboutImage2} 
                  alt="About Us 2" 
                  className="rounded-lg shadow-card-foundation w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-foundation-gray">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                What we do
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy">
                We Believe that We can Save 
                <span className="text-primary block">More Lives with You</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white"
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
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Statistics */}
            <div className="mt-20 bg-primary rounded-2xl p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-5xl font-bold">5000+</div>
                  <div className="text-lg">People Reached Through Awareness Programs</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold">100k</div>
                  <div className="text-lg">Community Engagement Impact</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold">50+</div>
                  <div className="text-lg">Programs Successfully Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Board Tree Section */}
        <section className="py-20 bg-white" id="board-members-section">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                Leadership Structure
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy">
                Executive Board 
                <span className="text-primary block">Hierarchy</span>
              </h3>
            </div>

            {/* Tree Diagram */}
            <div className="flex flex-col items-center space-y-8 mb-20">
              {/* Patron */}
              <MemberTooltip 
                name={boardMembers[0].name} 
                description={boardMembers[0].description}
              >
                <Card className="w-80 text-center border-2 border-primary shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src={boardMembers[0].image} 
                        alt={boardMembers[0].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-foundation-navy">
                      {boardMembers[0].name}
                    </CardTitle>
                    <p className="text-primary font-medium text-lg">{boardMembers[0].position}</p>
                  </CardHeader>
                </Card>
              </MemberTooltip>

              {/* Connection Lines */}
              <div className="flex flex-col items-center">
                <div className="h-12 w-px bg-primary"></div>
                <div className="w-32 h-px bg-primary"></div>
                <div className="flex justify-between w-32">
                  <div className="h-12 w-px bg-primary"></div>
                  <div className="h-12 w-px bg-primary"></div>
                </div>
              </div>

              {/* Advisors and Executives */}
              <div className="flex flex-wrap justify-center space-x-8">
                {boardMembers.slice(1).map((member, index) => (
                  <MemberTooltip 
                    key={index}
                    name={member.name} 
                    description={member.description}
                  >
                    <Card className="w-64 text-center border border-primary/50 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                      <CardHeader className="pb-4">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardTitle className="text-lg font-bold text-foundation-navy">
                          {member.name}
                        </CardTitle>
                        <p className="text-primary font-medium">{member.position}</p>
                      </CardHeader>
                    </Card>
                  </MemberTooltip>
                ))}
              </div>
            </div>

            {/* Awesome Board Members */}
            <div className="text-center space-y-4 mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy">
                Awesome Board 
                <span className="text-primary block">Members</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awesomeBoardMembers.map((member, index) => (
                <MemberTooltip 
                  key={index}
                  name={member.name} 
                  description={member.description}
                >
                  <Card className="border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white text-center cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardTitle className="text-xl font-bold text-foundation-navy group-hover:text-primary transition-colors">
                        {member.name}
                      </CardTitle>
                      <p className="text-primary font-medium">{member.position}</p>
                    </CardHeader>
                  </Card>
                </MemberTooltip>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    
  );
};

export default About;