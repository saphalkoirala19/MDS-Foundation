import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import blogsImage from "@/assets/img-1_blogs.jpg";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

const BlogView = () => {
  const { id } = useParams();

  // Mock blog data - in real app, you'd fetch this based on the ID
  const blog = {
    id: id,
    title: "Exchange of the E-Learning Center Handover Document",
    content: `
      <p>Exchange of the E-Learning Center handover document between Mr. Sanket Koirala, Chairperson of Shahid Dharma Bhakta Study Foundation, Nepal, and Mr. Bhakta Bahadur Bhandari, Chief of the Tourism Office, Kathmandu under the Ministry of Culture and Tourism, Bagmati Province Government.</p>
      
      <p>This significant milestone represents a crucial step in our foundation's ongoing commitment to educational development and technological advancement in Nepal. The e-learning center will serve as a vital resource for communities across the region, providing access to digital education and modern learning tools.</p>
      
      <h3>Background</h3>
      <p>The MDS Foundation has been working tirelessly to establish educational infrastructure that honors the legacy of Martyr Dharma Bhakta Mathema while serving the practical needs of today's learners. This e-learning center represents months of planning, coordination, and dedication from our team and partners.</p>
      
      <h3>Key Features of the E-Learning Center</h3>
      <ul>
        <li>Modern computer facilities with high-speed internet connectivity</li>
        <li>Digital library resources and educational software</li>
        <li>Video conferencing capabilities for remote learning</li>
        <li>Multimedia classrooms equipped with interactive displays</li>
        <li>Accessible design for learners with disabilities</li>
      </ul>
      
      <h3>Community Impact</h3>
      <p>This e-learning center will directly benefit hundreds of students, educators, and community members by providing:</p>
      <ul>
        <li>Access to quality educational resources</li>
        <li>Digital literacy training programs</li>
        <li>Professional development opportunities</li>
        <li>Remote learning capabilities during challenging times</li>
      </ul>
      
      <h3>Partnership with Government</h3>
      <p>The handover ceremony with Mr. Bhakta Bahadur Bhandari from the Tourism Office demonstrates the strong partnership between our foundation and government institutions. This collaboration ensures sustainable operation and maintenance of the facility.</p>
      
      <p>We are grateful for the support of the Ministry of Culture and Tourism, Bagmati Province Government, and all stakeholders who have made this project possible. Together, we continue to build a more educated and empowered Nepal.</p>
    `,
    image: blogsImage,
    date: "2025-01-15",
    author: "MDS Foundation",
    category: "Events"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full font-medium">
                  {blog.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {blog.title}
              </h1>
              <nav className="text-lg">
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/blogs" className="hover:text-secondary transition-colors">Blogs</Link>
                <span className="mx-2">/</span>
                <span>Article</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button variant="ghost" className="mb-8" asChild>
                <Link to="/blogs">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blogs
                </Link>
              </Button>

              {/* Featured Image */}
              <div className="aspect-video overflow-hidden rounded-lg shadow-card-foundation mb-8">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-muted-foreground leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>

              {/* Share Section */}
              <div className="border-t border-gray-200 mt-12 pt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Share2 className="h-5 w-5" />
                    <span className="font-medium">Share this article:</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-foundation-navy mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Link to="/blog/2" className="group">
                    <div className="bg-foundation-gray rounded-lg p-6 group-hover:shadow-card-foundation transition-all">
                      <h4 className="font-semibold text-foundation-navy group-hover:text-primary transition-colors mb-2">
                        Creating Better Democratic Living Conditions
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Our foundation continues its mission to create better democratic living conditions...
                      </p>
                    </div>
                  </Link>
                  <Link to="/blog/3" className="group">
                    <div className="bg-foundation-gray rounded-lg p-6 group-hover:shadow-card-foundation transition-all">
                      <h4 className="font-semibold text-foundation-navy group-hover:text-primary transition-colors mb-2">
                        Carrying the Legacy, Shaping the Future
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We are a non-political, non-profit social organization founded in honor...
                      </p>
                    </div>
                  </Link>
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

export default BlogView;