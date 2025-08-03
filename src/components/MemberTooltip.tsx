import { useState } from "react";

interface MemberTooltipProps {
  name: string;
  description: string;
  children: React.ReactNode;
}

export const MemberTooltip = ({ name, description, children }: MemberTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 animate-fade-in">
          <div className="bg-white border-2 border-primary rounded-lg shadow-lg p-4 max-w-xs relative">
            {/* Cloud-style pointer */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-primary rotate-45"></div>
            
            <h5 className="font-bold text-foundation-navy mb-2">{name}</h5>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};