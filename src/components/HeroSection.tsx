import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider";
import { AnimatedText } from "./AnimatedText";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Animated Text */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-block">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                (M.D.S) Foundation
              </span>
            </div>

            <AnimatedText />

            <p className="text-lg text-muted-foreground leading-relaxed">
              Martyr Dharma Bhakta Study Foundation Nepal is a non-political, non-profit social organization established in honor of Martyr Dharma Bhakta Mathema. We work to promote democratic values, human rights awareness, and social development through education, media, and advocacy programs across Nepal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="foundation" size="lg" asChild>
                <Link to="/about">Discover More</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="h-96 lg:h-[500px]" data-aos="fade-left">
            <ImageSlider />
          </div>
        </div>

        {/* Legacy Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-hover-foundation" data-aos="fade-up">
          <div className="bg-primary text-white p-12 md:p-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Martyr Dharma Bhakta 
              <span className="block text-secondary">Study Foundation</span>
              <span className="block">Nepal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Creating better democratic living conditions for people through education, advocacy, and social development programs.
            </p>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};