import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogView from "./pages/BlogView";
import Gallery from "./pages/Gallery";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import SaveMoreLives from "./pages/SaveMoreLives";
import CommunityRadio from "./pages/programs/CommunityRadio";
import ChildrenPrimeMinister from "./pages/programs/ChildrenPrimeMinister";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogView />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/library" element={<Library />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/save-more-lives" element={<SaveMoreLives />} />
          <Route path="/programs/community-radio" element={<CommunityRadio />} />
          <Route path="/programs/children-prime-minister" element={<ChildrenPrimeMinister />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
