import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import { clsx } from "clsx";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string | null; // Deployment URL
  githubUrl?: string | null; // GitHub repository URL
  type: "web" | "android";
  comingSoon?: boolean; // Mark as coming soon
}

// Animation variants for card hover effect
const cardVariants = {
  initial: { y: 0, scale: 1 },
  hover: { y: -10, scale: 1.02 },
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  link,
  githubUrl,
  type,
  comingSoon = false,
}: ProjectCardProps) {
  const hasDeploymentLink = link && link !== "" && !comingSoon;
  const hasGithubLink = githubUrl && githubUrl !== "" && !comingSoon;

  const CardWrapper = hasGithubLink ? "a" : "div";
  const cardProps = hasGithubLink
    ? {
      href: githubUrl,
      target: "_blank",
      rel: "noopener noreferrer",
    }
    : {};

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.3)] hover:border-indigo-500/50 will-change-transform"
    >
      <CardWrapper
        {...cardProps}
        className={clsx(
          "relative flex flex-col h-full",
          hasGithubLink && "cursor-pointer"
        )}
      >
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden transform-gpu will-change-transform backface-hidden">
          <div className="absolute inset-0 bg-indigo-500/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={imageUrl}
            alt={title}
            className={clsx(
              "h-full w-full object-cover",
              comingSoon && "opacity-40"
            )}
          />

          {/* Coming Soon Overlay - Centered in image area */}
          {comingSoon && (
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/50 backdrop-blur-md">
                <Clock size={16} className="text-amber-400" />
                <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Coming Soon</span>
              </div>
            </div>
          )}

          {/* Overlay Gradient - Starts at title, 0% to 100% opacity */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent z-15 pointer-events-none will-change-transform backface-hidden" />

          {/* Type Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className={clsx(
                "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md border border-white/10 shadow-lg",
                type === "web"
                  ? "bg-indigo-500/80 text-white"
                  : "bg-pink-500/80 text-white"
              )}
            >
              {type}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 flex flex-1 flex-col p-6 -mt-12 isolate backdrop-blur-[1px]">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
              {title}
            </h3>
            {hasDeploymentLink && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(link, "_blank", "noopener,noreferrer");
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            )}
          </div>

          <p className="flex-1 text-zinc-400 leading-relaxed text-sm mb-6 group-hover:text-zinc-300 transition-colors">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 group-hover:text-zinc-400 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
