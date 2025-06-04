import { FC, ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video?: string;
  image?: string;
  active: boolean;
  onClick?: () => void;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  image,
  active,
  onClick
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Control video playback when active state changes
  useEffect(() => {
    if (videoRef.current && video) {
      if (active) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Video play failed:", error);
          });
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to beginning
      }
    }
  }, [active, video]);

  return (
    <div
      className={cn(
        "relative bg-secondary-background rounded-2xl overflow-hidden cursor-pointer transition-all duration-300",
        active ? "scale-105 shadow-xl" : "hover:scale-102"
      )}
      onClick={onClick}
    >
      {/* Media background - Video or Image */}
      <div className="relative w-full h-64 lg:h-80">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="metadata"
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              !active && "grayscale brightness-50"
            )}
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-500",
              !active && "grayscale brightness-50"
            )}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.src = "/assets/images/placeholder-project.jpg";
            }}
          />
        ) : (
          // Fallback placeholder if neither video nor image is provided
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-cosmos to-blue-hera">
            <span className="text-2xl font-bold text-primary-foreground opacity-50">
              {title.charAt(0)}
            </span>
          </div>
        )}

        {/* Overlay - darker when inactive */}
        <div className={cn(
          "absolute inset-0 transition-all duration-500",
          active ? "bg-black/20" : "bg-black/60"
        )} />
      </div>

      {/* Content */}
      <div className="p-6">
        {logo && (
          <div className="mb-4">
            {logo}
          </div>
        )}

        <h3 className={cn(
          "text-xl font-semibold mb-2 transition-colors duration-300",
          active ? "text-primary-foreground" : "text-secondary-foreground"
        )}>
          {title}
        </h3>

        <span className={cn(
          "text-sm px-3 py-1 rounded-full transition-colors duration-300",
          active
            ? "text-secondary-foreground bg-primary-background"
            : "text-secondary-foreground/70 bg-primary-background/50"
        )}>
          {tag}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;