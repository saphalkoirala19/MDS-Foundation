import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ProgramModal = ({ isOpen, onClose, title, description, fullDescription, icon: Icon }: ProgramModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon className="h-6 w-6 text-white" />
            </div>
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <div className="bg-foundation-gray p-4 rounded-lg">
            <p className="text-muted-foreground font-medium">{description}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foundation-navy">Program Details</h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {fullDescription}
              </p>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="foundation">
              Learn More
            </Button> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};