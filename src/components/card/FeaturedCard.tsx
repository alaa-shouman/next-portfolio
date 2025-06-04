import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
  onClick?: () => void;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ 
  logo, 
  title, 
  tag, 
  video, 
  active, 
  onClick 
}) => {
  return (
    <div 
      className={cn(
        "relative bg-secondary-background rounded-2xl overflow-hidden cursor-pointer transition-all duration-300",
        active ? "scale-105 shadow-xl" : "hover:scale-102"
      )}
      onClick={onClick}
    >
      {/* Video background */}
      <div className="relative w-full h-64 lg:h-80">
        <video 
          src={video} 
          autoPlay={active} 
          muted 
          loop 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {logo && (
          <div className="mb-4">
            {logo}
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-primary-foreground mb-2">
          {title}
        </h3>
        
        <span className="text-sm text-secondary-foreground bg-primary-background px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;