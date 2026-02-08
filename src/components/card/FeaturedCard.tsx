import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { FaApple, FaExternalLinkAlt, FaGithub, FaGooglePlay, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
}

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  description?: string;
  video?: string;
  image?: string | StaticImageData | undefined;
  active: boolean;
  onClick?: () => void;
  link: string;
  googlePlay?: string;
  appStore?: string;
  technologies?: Technology[];
}

// Animated text component that reveals text word by word
const AnimatedDescription: FC<{ text: string; isVisible: boolean }> = ({ text, isVisible }) => {
  const words = text.split(" ");

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.p
          className="text-sm leading-relaxed text-primary-foreground/90"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                staggerChildren: 0.02,
                staggerDirection: -1,
              },
            },
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -10,
                  filter: "blur(5px)",
                  transition: { duration: 0.2 },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

// Mobile overlay component for description
const MobileDescriptionOverlay: FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies?: Technology[];
}> = ({ isOpen, onClose, title, description, technologies }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
          >
            <div className="bg-secondary-background rounded-t-3xl overflow-hidden max-h-[70vh]">
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-2">
                <motion.div
                  className="w-12 h-1.5 bg-primary-foreground/20 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                />
              </div>

              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary-background/50 text-primary-foreground/70 hover:bg-primary-background hover:text-primary-foreground transition-colors"
                onClick={onClose}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <FaTimes className="w-4 h-4" />
              </motion.button>

              {/* Content */}
              <div className="px-6 pb-8 pt-2 overflow-y-auto max-h-[60vh]">
                <motion.h3
                  className="text-xl font-bold text-primary-foreground mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {title}
                </motion.h3>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {description}
                  </p>

                  {/* Technologies in overlay */}
                  {technologies && technologies.length > 0 && (
                    <motion.div
                      className="pt-4 border-t border-primary-foreground/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-xs text-primary-foreground/50 mb-3 uppercase tracking-wider">
                        Built with
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-background/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                          >
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={16}
                              height={16}
                              className="w-4 h-4"
                            />
                            <span className="text-xs text-primary-foreground/70">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  description,
  video,
  image,
  active,
  onClick,
  link,
  googlePlay,
  appStore,
  technologies
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Handle card click - show overlay on mobile when active
  const handleCardClick = () => {
    if (onClick) onClick();
    if (isMobile && active && description) {
      setShowMobileOverlay(true);
    }
  };

  // Close mobile overlay when card becomes inactive
  useEffect(() => {
    if (!active) {
      setShowMobileOverlay(false);
    }
  }, [active]);

  return (
    <>
      <motion.div
        className={cn(
          "relative bg-secondary-background rounded-2xl overflow-hidden cursor-pointer",
          active ? "shadow-xl z-10" : ""
        )}
        onClick={handleCardClick}
        layout
        initial={false}
        animate={{
          scale: active ? 1.02 : 1,
        }}
        whileHover={{ scale: active ? 1.02 : 1.01 }}
        transition={{
          layout: { type: "spring", stiffness: 300, damping: 30 },
          scale: { type: "spring", stiffness: 400, damping: 25 },
        }}
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
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{
              backgroundColor: active ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.6)",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Project Link Buttons - only show when active */}
          <AnimatePresence>
            {active && (
              <motion.div
                className="absolute top-4 right-4 z-10 flex flex-row-reverse gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {link && link !== '#' && (
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative flex items-center justify-center",
                      "w-12 h-12 rounded-xl",
                      "bg-black/10 backdrop-blur-md border border-black/20",
                      "text-black shadow-lg hover:shadow-xl",
                      "transition-all duration-300 ease-out",
                      "hover:bg-black/20"
                    )}
                    onClick={(e) => e.stopPropagation()}
                    title={isGitHubLink ? "View on GitHub" : "View Live Project"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative z-10">
                      {isGitHubLink ? (
                        <FaGithub className="w-5 h-5" />
                      ) : (
                        <FaExternalLinkAlt className="w-5 h-5" />
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </motion.a>
                )}
                {googlePlay && (
                  <motion.a
                    href={googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative flex items-center justify-center",
                      "w-12 h-12 rounded-xl",
                      "bg-black/10 backdrop-blur-md border border-black/20",
                      "text-black shadow-lg hover:shadow-xl",
                      "transition-all duration-300 ease-out",
                      "hover:bg-black/20"
                    )}
                    onClick={(e) => e.stopPropagation()}
                    title="View on Google Play"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative z-10">
                      <FaGooglePlay className="w-5 h-5" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </motion.a>
                )}
                {appStore && (
                  <motion.a
                    href={appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative flex items-center justify-center",
                      "w-12 h-12 rounded-xl",
                      "bg-black/10 backdrop-blur-md border border-black/20",
                      "text-black shadow-lg hover:shadow-xl",
                      "transition-all duration-300 ease-out",
                      "hover:bg-black/20"
                    )}
                    onClick={(e) => e.stopPropagation()}
                    title="View on App Store"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative z-10">
                      <FaApple className="w-5 h-5" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <motion.div
          className="p-6"
          layout
        >
          {logo && (
            <div className="mb-4">
              {logo}
            </div>
          )}

          {/* Title and Description Section - Desktop shows description when active */}
          <div className="min-h-[60px] md:min-h-[80px] mb-3">
            {/* Desktop: Show animated description when active, title when not */}
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
                {active && description ? (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      className="text-lg font-semibold text-primary-foreground mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {title}
                    </motion.h3>
                    <AnimatedDescription text={description} isVisible={true} />
                  </motion.div>
                ) : (
                  <motion.h3
                    key="title"
                    className={cn(
                      "text-xl font-semibold transition-colors duration-300",
                      active ? "text-primary-foreground" : "text-secondary-foreground"
                    )}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {title}
                  </motion.h3>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile: Always show title, description in overlay */}
            <h3 className={cn(
              "md:hidden text-xl font-semibold transition-colors duration-300",
              active ? "text-primary-foreground" : "text-secondary-foreground"
            )}>
              {title}
            </h3>

            {/* Mobile hint to tap for details */}
            <AnimatePresence>
              {active && description && isMobile && (
                <motion.p
                  className="md:hidden text-xs text-primary-foreground/50 mt-2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ delay: 0.2 }}
                >
                  Tap again to view details
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Technology Stack Icons */}
          {technologies && technologies.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              layout
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded bg-primary-background/30 hover:bg-primary-background/50 transition-colors",
                    active && "bg-primary-background/50 hover:bg-primary-background/70"
                  )}
                  title={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
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
                    onError={() => {
                      console.error(`Failed to load icon for ${tech.name}`);
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.span
            className={cn(
              "inline-block text-sm px-3 py-1 rounded-full transition-colors duration-300",
              active
                ? "text-secondary-foreground bg-primary-background"
                : "text-secondary-foreground/70 bg-primary-background/50"
            )}
            layout
          >
            {tag}
          </motion.span>
        </motion.div>

        {/* Active indicator glow */}
        <AnimatePresence>
          {active && (
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.15), 0 0 80px rgba(147, 51, 234, 0.1)",
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Description Overlay */}
      {description && (
        <MobileDescriptionOverlay
          isOpen={showMobileOverlay}
          onClose={() => setShowMobileOverlay(false)}
          title={title}
          description={description}
          technologies={technologies}
        />
      )}
    </>
  );
};

export default FeaturedCard;