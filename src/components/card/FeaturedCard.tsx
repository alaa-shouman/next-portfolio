import { FC, ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Technology {
  name: string;
  icon: string;
}

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video?: string;
  image?: string;
  active: boolean;
  onClick?: () => void;
  link: string;
  technologies?: Technology[];
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  image,
  active,
  onClick,
  link,
  technologies
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check if it's a GitHub link or deployed project
  const isGitHubLink = link.includes('github.com') || link === '#';

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

        {/* Project Link Button - only show when active and link exists */}
        {active && link && link !== '#' && (
          <div className="absolute top-4 right-4 z-10">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative flex items-center justify-center",
                "w-12 h-12 rounded-xl",
                "bg-black/10 backdrop-blur-md border border-black/20",
                "text-black shadow-lg hover:shadow-xl",
                "transition-all duration-300 ease-out",
                "hover:bg-black/20 hover:scale-110",
                "before:absolute before:inset-0 before:rounded-xl",
                "before:bg-gradient-to-br before:from-black/20 before:to-transparent",
                "before:opacity-0 before:transition-opacity before:duration-300",
                "hover:before:opacity-100"
              )}
              onClick={(e) => e.stopPropagation()}
              title={isGitHubLink ? "View on GitHub" : "View Live Project"}
            >
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {isGitHubLink ? (
                  <FaGithub className="w-5 h-5" />
                ) : (
                  <FaExternalLinkAlt className="w-5 h-5" />
                )}
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {logo && (
          <div className="mb-4">
            {logo}
          </div>
        )}

        <h3 className={cn(
          "text-xl font-semibold mb-3 transition-colors duration-300",
          active ? "text-primary-foreground" : "text-secondary-foreground"
        )}>
          {title}
        </h3>

        {/* Technology Stack Icons */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded bg-primary-background/30 hover:bg-primary-background/50 transition-colors",
                  active && "bg-primary-background/50 hover:bg-primary-background/70"
                )}
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className={cn(
                    "w-5 h-5 transition-all duration-500",
                    !active && "grayscale brightness-75"
                  )}
                  onError={(e:any) => {
                    console.error(`Failed to load icon for ${tech.name}`);
                  }}
                />
              </div>
            ))}
          </div>
        )}

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