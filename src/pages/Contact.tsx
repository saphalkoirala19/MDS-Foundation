import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import contactImage from "@/assets/img-1_contact.jpg";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      subtitle: "Emergency Cases",
      primary: "+977-9841226979",
      secondary: "(24/7)",
      additionalInfo: "General Inquiries: +977-9841226979"
    },
    {
      icon: Mail,
      title: "Email Address",
      subtitle: "Get in Touch",
      primary: "mds.foundation@gmail.com",
      secondary: "info@mdsfoundation.org.np"
    },
    {
      icon: MapPin,
      title: "Our Location",
      subtitle: "Visit Our Offices",
      primary: "Head office: Sanepa, Lalitpur",
      secondary: "Corporate Office: Anamnagar, Kathmandu"
    },
    {
      icon: Clock,
      title: "Working Hours",
      subtitle: "Office Timings",
      primary: "Sunday - Friday: 9:00 AM - 5:00 PM",
      secondary: "Saturday: Closed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foundation-navy">Contact Us</h1>
              <nav className="text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span>Contact Us</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white text-center"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foundation-navy group-hover:text-primary transition-colors">
                        {info.title}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium">{info.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-foundation-navy mb-1">
                        {info.primary}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.secondary}
                      </p>
                      {info.additionalInfo && (
                        <p className="text-muted-foreground text-sm mt-2">
                          {info.additionalInfo}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Image */}
        <section className="py-20 bg-foundation-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Get In Touch
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy leading-tight">
                    Feel Free to Contact 
                    <span className="text-primary block">with us</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We are inspired by the legacy of Martyr Dharma Bhakta Mathema, a pioneer in Nepal's democratic movement. His sacrifice continues to fuel our mission to protect freedom, justice, and human dignity.
                  </p>
                </div>

                <Card className="border-0 shadow-card-foundation bg-white">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foundation-navy mb-2">
                            First Name
                          </label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foundation-navy mb-2">
                            Last Name
                          </label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foundation-navy mb-2">
                          Email Address
                        </label>
                        <Input type="email" placeholder="Enter your email address" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foundation-navy mb-2">
                          Phone Number
                        </label>
                        <Input type="tel" placeholder="Enter your phone number" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foundation-navy mb-2">
                          Subject
                        </label>
                        <Input placeholder="Enter message subject" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foundation-navy mb-2">
                          Message
                        </label>
                        <Textarea 
                          placeholder="Write your message here..." 
                          rows={6}
                        />
                      </div>
                      <Button variant="foundation" size="lg" className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Image and Social */}
              <div className="space-y-8">
                <img 
                  src={contactImage} 
                  alt="Contact Us" 
                  className="rounded-lg shadow-card-foundation w-full h-96 object-cover"
                />

                {/* Social Media */}
                <Card className="border-0 shadow-card-foundation bg-white">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-xl font-bold text-foundation-navy mb-4">
                      Connect with Us
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Follow us on social media for the latest updates and news about our programs and initiatives.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="icon" className="hover:bg-foundation-blue hover:text-white hover:border-foundation-blue">
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-foundation-blue hover:text-white hover:border-foundation-blue">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-foundation-blue hover:text-white hover:border-foundation-blue">
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card className="border-0 shadow-card-foundation bg-primary text-white">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold mb-4">
                      Foundation Established
                    </h4>
                    <p className="text-lg mb-2">30 December 2002</p>
                    <p className="text-lg">(2059 Paush-15)</p>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm">
                        Over 20 years of service to Nepal's democratic development and human rights advocacy.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;