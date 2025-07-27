import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import libraryImage from "@/assets/img-1_library.jpg";
import { Book, Download, Search, FileText, Video, Headphones, Globe } from "lucide-react";

const Library = () => {
  const resources = [
    {
      icon: Book,
      title: "Digital Books",
      count: "250+",
      description: "Collection of books on democracy, human rights, and social development"
    },
    {
      icon: FileText,
      title: "Research Papers",
      count: "100+",
      description: "Academic papers and research documents on political movements"
    },
    {
      icon: Video,
      title: "Educational Videos",
      count: "75+",
      description: "Documentary videos and educational content about Nepal's history"
    },
    {
      icon: Headphones,
      title: "Audio Archives",
      count: "50+",
      description: "Historical speeches and interviews from democratic leaders"
    }
  ];

  const featuredResources = [
    {
      title: "Nepal's Democratic Movement: A Historical Overview",
      type: "PDF Document",
      size: "2.5 MB",
      description: "Comprehensive study of Nepal's journey towards democracy",
      image: libraryImage
    },
    {
      title: "Martyr Dharma Bhakta Mathema: Life and Legacy",
      type: "eBook",
      size: "5.2 MB",
      description: "Detailed biography of the democratic martyr",
      image: libraryImage
    },
    {
      title: "Human Rights in Modern Nepal",
      type: "Research Paper",
      size: "1.8 MB",
      description: "Analysis of human rights developments in contemporary Nepal",
      image: libraryImage
    },
    {
      title: "Community Radio Impact Study",
      type: "Report",
      size: "3.1 MB",
      description: "Study on the impact of community radio in rural Nepal",
      image: libraryImage
    },
    {
      title: "Youth Engagement in Democracy",
      type: "Video Series",
      size: "250 MB",
      description: "Educational video series on youth participation in democratic processes",
      image: libraryImage
    },
    {
      title: "Constitutional Development Timeline",
      type: "Interactive Guide",
      size: "4.7 MB",
      description: "Interactive timeline of Nepal's constitutional development",
      image: libraryImage
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
              <h1 className="text-4xl font-bold text-foundation-navy">Our Library</h1>
              <nav className="text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span>Our Library</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Library Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foundation-navy">
                  Digital Library Collection
                </h2>
                <p className="text-lg text-muted-foreground">
                  Access our comprehensive collection of digital resources on democracy, human rights, and social development.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Democracy and Human Rights Handbook",
                    description: "Comprehensive guide to democratic principles and human rights framework in Nepal.",
                    type: "PDF",
                    pages: "120 pages"
                  },
                  {
                    title: "Martyr Dharma Bhakta Mathema Biography",
                    description: "Complete life story and contributions of our founding inspiration.",
                    type: "eBook",
                    pages: "85 pages"
                  },
                  {
                    title: "Community Development Guidelines",
                    description: "Best practices for community engagement and development programs.",
                    type: "PDF",
                    pages: "65 pages"
                  },
                  {
                    title: "Youth Leadership Training Manual",
                    description: "Training materials for developing youth leadership in democratic processes.",
                    type: "PDF",
                    pages: "95 pages"
                  },
                  {
                    title: "Media and Democracy Research",
                    description: "Research papers on the role of media in democratic society.",
                    type: "Collection",
                    pages: "Multiple"
                  },
                  {
                    title: "Constitutional Development Timeline",
                    description: "Historical overview of Nepal's constitutional development process.",
                    type: "PDF",
                    pages: "45 pages"
                  }
                ].map((resource, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                          {resource.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{resource.pages}</span>
                      </div>
                      <CardTitle className="text-xl font-bold text-foundation-navy group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="bg-primary p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Free Access to All Resources</h3>
                  <p className="text-lg mb-6">
                    All materials in our digital library are freely available to support education, 
                    research, and community development initiatives.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold">100+</div>
                      <div>Digital Resources</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">24/7</div>
                      <div>Online Access</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">Free</div>
                      <div>No Registration</div>
                    </div>
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

export default Library;