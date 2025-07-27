import { useEffect } from "react";
import AOS from "aos";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MessageCircle, Crown, Heart } from "lucide-react";
import programImage from "@/assets/blog5.jpg";

const ChildrenPrimeMinister = () => {
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
                Children with the
                <span className="text-secondary block">Prime Minister Program</span>
              </h1>
              <nav className="text-lg">
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/blogs" className="hover:text-secondary transition-colors">Programs</Link>
                <span className="mx-2">/</span>
                <span>Children with PM</span>
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
                  alt="Children with Prime Minister Program"
                  className="w-full h-96 object-cover rounded-lg shadow-card-foundation"
                />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6" data-aos="fade-up">
                  <h2 className="text-3xl font-bold text-foundation-navy">
                    Historic <span className="text-primary">Youth Engagement Initiative</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    On Bhadra 24, 2063 (September 10, 2006), MDS Foundation organized a groundbreaking 
                    national dialogue that brought children face-to-face with Nepal's Prime Minister. 
                    This historic program created an unprecedented platform for young voices to be heard 
                    at the highest levels of government, fostering civic awareness and democratic participation 
                    among Nepal's future leaders.
                  </p>
                </div>

                {/* Program Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">Direct Dialogue</h3>
                    <p className="text-muted-foreground">
                      Children from across Nepal were given the opportunity to directly ask questions, 
                      share concerns, and engage in meaningful conversation with the nation's top leader.
                    </p>
                  </div>
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <MessageCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">Open Forum</h3>
                    <p className="text-muted-foreground">
                      The program provided an open forum where children could express their views on 
                      education, child rights, and their vision for Nepal's democratic future.
                    </p>
                  </div>
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <Crown className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">Leadership Exposure</h3>
                    <p className="text-muted-foreground">
                      Young participants gained invaluable exposure to democratic processes and 
                      leadership, inspiring many to become future advocates for social change.
                    </p>
                  </div>
                  <div className="bg-foundation-gray p-6 rounded-lg">
                    <Heart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foundation-navy mb-3">National Impact</h3>
                    <p className="text-muted-foreground">
                      The program set a precedent for youth inclusion in national governance and 
                      demonstrated the importance of listening to children's perspectives on policy.
                    </p>
                  </div>
                </div>

                {/* Program Impact */}
                <div className="bg-primary text-white p-8 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="text-2xl font-bold text-center mb-8">Program Legacy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">200+</div>
                      <div className="text-lg">Children Participated</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">First</div>
                      <div className="text-lg">Program of Its Kind</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary mb-2">National</div>
                      <div className="text-lg">Media Coverage</div>
                    </div>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-6" data-aos="fade-up" data-aos-delay="600">
                  <h3 className="text-2xl font-bold text-foundation-navy">Key Outcomes & Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        Established a new model for youth participation in national governance and policy discussions
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        Inspired the Prime Minister to implement more child-friendly policies and programs
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        Motivated participating children to become active citizens and community leaders
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        Set a precedent for future programs connecting youth with national leadership
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="space-y-6" data-aos="fade-up" data-aos-delay="700">
                  <h3 className="text-2xl font-bold text-foundation-navy">Participant Reflection</h3>
                  <div className="bg-foundation-gray p-6 rounded-lg border-l-4 border-primary">
                    <p className="text-muted-foreground italic text-lg leading-relaxed">
                      "Meeting the Prime Minister as a child changed my entire perspective on democracy 
                      and civic responsibility. It taught me that every voice matters, regardless of age. 
                      Today, I work in local government, and I always remember the lessons from that day."
                    </p>
                    <div className="mt-4 font-semibold text-foundation-navy">
                      - Sita Sharma, Former Participant (now Local Government Official)
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center space-y-6 pt-8" data-aos="fade-up" data-aos-delay="800">
                  <h3 className="text-2xl font-bold text-foundation-navy">Continue the Legacy</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Support our ongoing youth engagement programs and help us create more opportunities 
                    for young voices to shape Nepal's democratic future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="foundation" size="lg" asChild>
                      <Link to="/contact">Support Youth Programs</Link>
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

export default ChildrenPrimeMinister;