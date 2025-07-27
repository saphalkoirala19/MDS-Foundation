import { useEffect } from "react";
import AOS from "aos";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Target, Globe } from "lucide-react";

const SaveMoreLives = () => {
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
                We Believe that We Can Save
                <span className="text-secondary block">More Lives with You</span>
              </h1>
              <nav className="text-lg">
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span>Our Vision</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Vision Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Introduction */}
              <div className="text-center space-y-6" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-foundation-navy">
                  Our Collective <span className="text-primary">Vision</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  At MDS Foundation, we believe that meaningful change happens when communities come together. 
                  Our vision extends beyond individual impact—we envision a Nepal where democracy, human rights, 
                  and civic development flourish through collective action.
                </p>
              </div>

              {/* Core Beliefs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-foundation-gray p-8 rounded-lg">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foundation-navy mb-4">Community First</h3>
                  <p className="text-muted-foreground">
                    We believe that lasting change starts at the grassroots level. By empowering local communities 
                    with education, resources, and advocacy, we create ripple effects that transform entire regions.
                  </p>
                </div>
                <div className="bg-foundation-gray p-8 rounded-lg">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foundation-navy mb-4">Collaborative Impact</h3>
                  <p className="text-muted-foreground">
                    Together, we can achieve what seems impossible alone. Through partnerships, volunteerism, 
                    and community engagement, we multiply our impact exponentially.
                  </p>
                </div>
              </div>

              {/* The Why */}
              <div className="bg-primary text-white p-12 rounded-2xl" data-aos="fade-up" data-aos-delay="400">
                <div className="text-center space-y-6">
                  <Target className="h-16 w-16 text-secondary mx-auto" />
                  <h3 className="text-3xl font-bold">Why "More Lives"?</h3>
                  <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                    When we say "save more lives," we're not just talking about physical preservation. We're talking about 
                    saving lives from ignorance, injustice, and inequality. We're talking about creating opportunities 
                    for people to live with dignity, participate in democracy, and reach their full potential.
                  </p>
                </div>
              </div>

              {/* How We Do It */}
              <div className="space-y-8" data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-3xl font-bold text-foundation-navy text-center">
                  How We <span className="text-primary">Save Lives Together</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-4 p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-foundation-navy">Education & Awareness</h4>
                    <p className="text-muted-foreground">
                      We provide democratic education, human rights awareness, and civic development programs 
                      that empower individuals with knowledge and skills.
                    </p>
                  </div>
                  <div className="text-center space-y-4 p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-foundation-navy">Media & Advocacy</h4>
                    <p className="text-muted-foreground">
                      Through community radio, documentaries, and advocacy campaigns, we amplify voices 
                      and create platforms for democratic participation.
                    </p>
                  </div>
                  <div className="text-center space-y-4 p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-foundation-navy">Youth Engagement</h4>
                    <p className="text-muted-foreground">
                      We connect young people with leaders, provide platforms for their voices, 
                      and prepare them to be tomorrow's democratic champions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center space-y-6 pt-12" data-aos="fade-up" data-aos-delay="800">
                <Globe className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-3xl font-bold text-foundation-navy">Join Our Mission</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Every person who joins our cause multiplies our impact. Whether through volunteering, 
                  donations, or simply spreading awareness, you become part of a movement that saves 
                  and transforms lives across Nepal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button variant="foundation" size="lg" asChild>
                    <Link to="/contact">Get Involved</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
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

export default SaveMoreLives;