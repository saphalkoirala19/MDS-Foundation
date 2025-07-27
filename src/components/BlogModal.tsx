import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
  };
}

export const BlogModal = ({ isOpen, onClose, blog }: BlogModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foundation-navy">
            {blog.title}
          </DialogTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
              {blog.category}
            </span>
            <span>{new Date(blog.date).toLocaleDateString()}</span>
            <span>{blog.author}</span>
          </div>
        </DialogHeader>
        <DialogDescription className="text-base text-muted-foreground leading-relaxed mt-4">
          {blog.excerpt}
        </DialogDescription>
        <div className="mt-6">
          <p className="text-muted-foreground">
            This initiative reflects our ongoing commitment to promoting democratic values, 
            human rights awareness, and community development across Nepal. Through such 
            programs, we continue to honor the legacy of Martyr Dharma Bhakta Mathema 
            and work towards building a more informed and engaged society.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};