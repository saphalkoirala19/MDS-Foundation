import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import blogsImage1 from "@/assets/home1.jpg";
import blogsImage2 from "@/assets/blog2.jpg";
import blogsImage3 from "@/assets/blog3.jpg";
import blogsImage4 from "@/assets/home4.jpg";
import blogsImage5 from "@/assets/blog5.jpg";
import blogsImage6 from "@/assets/home6.jpg";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BlogModal } from "@/components/BlogModal";
import { useState } from "react";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (blog: any) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Exchange of the E-Learning Center Handover Document",
      excerpt: "Exchange of the E-Learning Center handover document between Mr. Sanket Koirala, Chairperson of Shahid Dharma Bhakta Study Foundation, Nepal, and Mr. Bhakta Bahadur Bhandari, Chief of the Tourism Office, Kathmandu under the Ministry of Culture and Tourism, Bagmati Province Government.",
      image: blogsImage1,
      date: "2025-01-15",
      author: "MDS Foundation",
      // category: "Events"
    },
    {
      id: 2,
      title: "Creating Better Democratic Living Condition for People",
      excerpt: "Our foundation continues its mission to create better democratic living conditions for the people of Nepal. Founded on 30 December 2002 (2059 Paush-15), we carry the legacy of Martyr Dharma Bhakta Mathema.",
      image: blogsImage2,
      date: "2025-01-10",
      author: "MDS Foundation",
      // category: "Democracy"
    },
    {
      id: 3,
      title: "Carrying the Legacy, Shaping the Future",
      excerpt: "We are a non-political, non-profit social organization founded in honor of one of Nepal's brightest democratic heroes—Martyr Dharma Bhakta Mathema. Through our work, we aim to raise awareness of democracy, human rights, and civic development.",
      image: blogsImage3,
      date: "2025-01-05",
      author: "MDS Foundation",
      // category: "Mission"
    },
    {
      id: 4,
      title: "Community Radio: Empowering Voices in Bhojpur",
      excerpt: "We operate a community radio station in Bhojpur District to spread awareness and foster community engagement through media, reaching thousands of people with important democratic messages.",
      image: blogsImage4,
      date: "2024-12-20",
      author: "MDS Foundation",
      // category: "Media"
    },
    {
      id: 5,
      title: "Children with the Prime Minister Program",
      excerpt: "On Bhadra 24, 2063 (Sept 10, 2006), we organized a groundbreaking national dialogue between children and the Prime Minister, fostering youth participation in democratic processes.",
      image: blogsImage5,
      date: "2024-12-15",
      author: "MDS Foundation",
      // category: "Youth Programs"
    },
    {
      id: 6,
      title: "Human Rights and Democracy Workshops",
      excerpt: "We regularly organize district-level workshops and awareness programs targeting youth on topics such as human rights, democratic values, and civic responsibilities.",
      image: blogsImage6,
      date: "2024-12-10",
      author: "MDS Foundation",
      // category: "Education"
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
              <h1 className="text-4xl font-bold text-foundation-navy">Blogs & Activities</h1>
              <nav className="text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span>Blogs & Activities</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="rounded-lg shadow-card-foundation w-full h-96 object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {/* {blogPosts[0].category} */}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foundation-navy">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Button 
                  variant="foundation" 
                  size="lg" 
                  onClick={() => handleReadMore(blogPosts[0])}
                >
                  Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-foundation-gray">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foundation-navy">
                Latest <span className="text-primary">Updates</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden border-0 shadow-card-foundation hover:shadow-hover-foundation transition-all duration-300 transform hover:-translate-y-2 group bg-white"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                        {/* {post.category} */}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foundation-navy group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                      onClick={() => handleReadMore(post)}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {selectedBlog && (
        <BlogModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          blog={selectedBlog} 
        />
      )}
    </div>
  );
};

export default Blogs;