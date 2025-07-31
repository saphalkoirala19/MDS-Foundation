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
import patronImg from "@/assets/SankharKoirala.jpeg"
import member1Img from "@/assets/SaujanyaKoirala.jpeg";
import member2Img from "@/assets/SarojDarnal.jpeg";
import { Award, Users2, Radio, Mic } from "lucide-react";

const About = () => {
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

  const boardMembers = [
    {
      name: "Sanket Koirala",
      position: "President",
      image: presidentImg
    },
    {
      name: "Gyan Prasad Acharya",
      position: "Vice-president",
      image: vpImg
    },
    {
      name: "Hari Neupane",
      position: "General Secretary",
      image: generalSecretaryImg
    },
    {
      name: "Laxman Sharma",
      position: "Treasurer",
      image: treasurerImg
    },
    {
      name: "Pramesh KC",
      position: "Advisor",
      image: advisorImg
    },
    {
      name: "Sankhar Koirala",
      position: "Patron",
      image: patronImg
    },
    {
      name: "Saujanya Koirala",
      position: "Member",
      image: member1Img
    },
    {
      name: "Saroj Darnal",
      position: "Member",
      image: member2Img
    }
  ];

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

        {/* Board Members Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                Executive Board
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy">
                Meet Our Awesome 
                <span className="text-primary block">Board Members</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white text-center"
                >
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
