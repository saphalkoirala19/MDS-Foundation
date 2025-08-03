import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import programsImage1 from "@/assets/home4.jpg";
import programsImage2 from "@/assets/home5.jpg";
import programsImage3 from "@/assets/home6.jpg";
import programsImage4 from "@/assets/home7.jpg";
import programsImage5 from "@/assets/home8.jpg";
import programsImage6 from "@/assets/gallery6.jpg";

export const Programs = () => {
  const programs = [
    {
      image: programsImage1,
      title: "In the field of communication, we...",
      description: "We operate a community radio station in Bhojpur District to spread awareness and foster community engagement through media.",
      href: "/blogs"
    },
    {
      image: programsImage2,
      title: "\"Barsha\" Docu-drama",
      description: "In collaboration with WaterAid, we produced a nationwide docu-drama in 2008 focused on access to clean water and sanitation.",
      href: "/blogs"
    },
    {
      image: programsImage3,
      title: "Human Rights and Democracy Programs",
      description: "We regularly organize district-level workshops and awareness programs targeting youth on topics such as human rights and democratic values.",
      href: "/blogs"
    },
    {
      image: programsImage4,
      title: "Digitization of Historical Movements",
      description: "We've collected and digitally archived key information about Nepal's Second People's Movement and the abolition of monarchy.",
      href: "/blogs"
    },
    {
      image: programsImage5,
      title: "Prime Minister with Children Program",
      description: "On Bhadra 24, 2063 (Sept 10, 2006), we organized a groundbreaking national dialogue between children and the Prime Minister.",
      href: "/blogs"
    },
    {
      image: programsImage6,
      title: "President with Children Program",
      description: "We regularly organize opportunities for children to engage with national leaders, fostering civic awareness and youth participation.",
      href: "/blogs"
    }
  ];
  
  return (
    <section className="py-20 bg-foundation-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
            Programs & Initiatives
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foundation-navy">
            Our Popular Programs & 
            <span className="text-primary block">Initiatives</span>
          </h3>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foundation-navy group-hover:text-primary transition-colors line-clamp-2">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {program.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  asChild
                >
                  <Link to={program.href}>Read more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="foundation" size="lg" asChild>
            <Link to="/blogs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};