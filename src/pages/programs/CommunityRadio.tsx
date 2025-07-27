import { useEffect } from "react";
import AOS from "aos";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Radio, Users, Mic, Volume2 } from "lucide-react";
import programImage from "@/assets/img-1_blogs.jpg";

const CommunityRadio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4" data-aos="fade-up">
              <h1 className="text-5xl md:text-6xl font-bold">
                Community Radio
                <span className="text-secondary block">Bhojpur District</span>
              </h1>
              <nav className="text-lg">
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/blogs" className="hover:text-secondary transition-colors">Programs</Link>
                <span className="mx-2">/</span>
                <span>Community Radio</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Program Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="mb-12" data-aos="fade-up">
                <img 
                  src={programImage} 
                  alt="Community Radio Station"
                  className="w-full h-96 object-cover rounded-lg shadow-card-foundation"
                />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6" data-aos="fade-up">
                  <h2 className="text-3xl font-bold text-foundation-navy">
                    Empowering Voices Through <span className="text-primary">Community Radio</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our community radio station in Bhojpur District serves as a vital communication hub, 
                    connecting remote communities with information, education, and democratic discourse. 
                    Since its establishment, it has become the voice of the people, broadcasting in local 
                    languages and addressing issues that matter most to the community.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <Radio className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">Local Programming</h3>
                    <p className="text-muted-foreground">
                      Daily programs addressing local issues, cultural preservation, and community development 
                      in native languages that resonate with our audience.
                    </p>
                  </div>
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">Community Participation</h3>
                    <p className="text-muted-foreground">
                      Interactive shows where community members share their stories, concerns, and 
                      participate in democratic discussions about local governance.
                    </p>
                  </div>
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <Mic className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">Educational Content</h3>
                    <p className="text-muted-foreground">
                      Programs focused on democratic education, human rights awareness, health information, 
                      and agricultural best practices for rural communities.
                    </p>
                  </div>
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <Volume2 className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">Emergency Broadcasting</h3>
                    <p className="text-muted-foreground">
                      Critical information dissemination during emergencies, natural disasters, 
                      and important civic announcements reaching even the most remote areas.
                    </p>
                  </div>
                </div>

                {/* Impact Statistics */}
                <div className="bg-primary text-white p-8 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="text-2xl font-bold text-center mb-8">Program Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">50,000+</div>
                      <div className="text-lg">Regular Listeners</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">15</div>
                      <div className="text-lg">Remote Villages Reached</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                      <div className="text-lg">Broadcasting Schedule</div>
                    </div>
                  </div>
                </div>

                {/* Success Stories */}
                <div className="space-y-6" data-aos="fade-up" data-aos-delay="600">
                  <h3 className="text-2xl font-bold text-foundation-navy">Success Stories</h3>
                  <div className="bg-foundation-gray p-6 rounded-lg border-l-4 border-primary">
                    <p className="text-muted-foreground italic text-lg leading-relaxed">
                      "The community radio has transformed how we stay informed and connected. During the 
                      2015 earthquake, it was our lifeline for emergency information. Now, our children 
                      learn about their rights and participate in community discussions thanks to the 
                      educational programs."
                    </p>
                    <div className="mt-4 font-semibold text-foundation-navy">
                      - Kamala Rai, Community Leader, Bhojpur
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center space-y-6 pt-8" data-aos="fade-up" data-aos-delay="800">
                  <h3 className="text-2xl font-bold text-foundation-navy">Support Community Media</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Help us expand our reach and continue providing vital communication services 
                    to remote communities across Nepal.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="foundation" size="lg" asChild>
                      <Link to="/contact">Support This Program</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/blogs">View All Programs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityRadio;