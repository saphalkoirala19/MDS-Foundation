import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import galleryImage from "@/assets/img-1_gallery.jpg";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "E-Learning Center Handover Ceremony",
      category: "Events",
      image: galleryImage,
      description: "Official handover ceremony of the E-Learning Center"
    },
    {
      id: 2,
      title: "Community Workshop in Bhojpur",
      category: "Workshops",
      image: galleryImage,
      description: "Democratic awareness workshop for local community"
    },
    {
      id: 3,
      title: "Youth Engagement Program",
      category: "Youth Programs",
      image: galleryImage,
      description: "Children with Prime Minister initiative"
    },
    {
      id: 4,
      title: "Human Rights Campaign",
      category: "Campaigns",
      image: galleryImage,
      description: "Awareness campaign for human rights"
    },
    {
      id: 5,
      title: "Radio Station Operations",
      category: "Media",
      image: galleryImage,
      description: "Community radio broadcasting in Bhojpur"
    },
    {
      id: 6,
      title: "Historical Documentation",
      category: "Archive",
      image: galleryImage,
      description: "Digitization of historical movements"
    },
    {
      id: 7,
      title: "Foundation Board Meeting",
      category: "Meetings",
      image: galleryImage,
      description: "Annual board meeting and planning session"
    },
    {
      id: 8,
      title: "Community Outreach",
      category: "Outreach",
      image: galleryImage,
      description: "Reaching out to rural communities"
    },
    {
      id: 9,
      title: "Educational Seminar",
      category: "Education",
      image: galleryImage,
      description: "Educational seminar on democratic values"
    }
  ];

  const categories = ["All", "Events", "Workshops", "Youth Programs", "Campaigns", "Media", "Archive", "Meetings", "Outreach", "Education"];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foundation-navy">Gallery</h1>
              <nav className="text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span>Gallery</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Filter and Search */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search gallery..."
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-foundation-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foundation-navy/0 group-hover:bg-foundation-navy/20 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-foundation-navy group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="foundation" size="lg">
                Load More Images
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-lg">Photos Captured</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-lg">Events Documented</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">20+</div>
                  <div className="text-lg">Years of History</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-lg">Program Highlights</div>
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

export default Gallery;