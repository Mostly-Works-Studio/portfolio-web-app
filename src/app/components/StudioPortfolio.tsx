import { motion, Variants } from "motion/react";
import { useEffect } from "react";
import { clsx } from "clsx";
import { Mail, Heart, Monitor, Smartphone, Layers } from "lucide-react";
import { SiGithub, SiGoogleplay, SiLinkedin } from "react-icons/si";
import { ProjectCard } from "./ProjectCard";
import { studioData } from "../data/studioData";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export function StudioPortfolio() {
  useEffect(() => {
    document.title = studioData.studio.name;

    // Update favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon-studio.png";
    }
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 pb-24 sm:pb-32"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="text-center mb-16 md:mb-32">
        <div className="inline-flex items-center justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-75"></div>
            <img
              src={studioData.studio.logo}
              alt="Mostly Works Studio"
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-white/10 shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight sm:tracking-tighter">
          {studioData.studio.name.split(" ").slice(0, 2).join(" ")} <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 pr-1">{studioData.studio.name.split(" ")[2]}</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-8 sm:mb-10 px-2">
          {studioData.studio.tagline}. <span className="text-white font-medium">{studioData.studio.description}</span>
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          <SocialButton icon={<SiGithub size={20} />} label="GitHub" href={studioData.social.github} />
          <SocialButton icon={<SiLinkedin size={20} />} label="LinkedIn" href={studioData.social.linkedin} />
          <SocialButton icon={<Mail size={20} />} label="Contact Us" href={`mailto:${studioData.contact.email}`} />
          <SocialButton icon={<SiGoogleplay size={20} />} label="Play Store" href={studioData.social.playstore} />
        </div>
      </motion.div>

      <div className="space-y-16 mb-16">
        {/* About */}
        <motion.section variants={item} className="bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Layers size={24} className="text-indigo-400" />
            About Us
          </h2>
          <p className="text-zinc-400 leading-loose text-lg whitespace-pre-line">
            {studioData.about}
          </p>
        </motion.section>

        {/* Web Projects */}
        <motion.section variants={item}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Monitor size={24} className="text-indigo-400" />
            Digital Horizons
          </h2>
          <p className="text-zinc-500 mb-6">Immersive PWAs & Reactive Ecosystems</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioData.projects.web.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  link={project.url}
                  githubUrl={project.githubUrl}
                  comingSoon={(project as any).comingSoon ?? false}
                  type="web"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mobile Projects */}
        <motion.section variants={item}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Smartphone size={24} className="text-pink-400" />
            Mobile Foundry
          </h2>
          <p className="text-zinc-500 mb-6">High-Fidelity Native & Flutter Engineering</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioData.projects.mobile.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  link={project.url}
                  githubUrl={project.githubUrl}
                  comingSoon={(project as any).comingSoon ?? false}
                  type="android"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer variants={item} className="text-center pt-12 pb-8 border-t border-white/5">
        <p className="text-zinc-500 flex items-center justify-center gap-2 text-sm">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by <span className="text-zinc-300 font-medium">Mostly Works Studio</span>
        </p>
      </motion.footer>
    </motion.div>
  );
}

function SocialButton({ icon, label, href, primary }: { icon: React.ReactNode, label: string, href: string, primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg",
        primary
          ? "bg-indigo-600 text-white shadow-indigo-500/20 hover:bg-indigo-500"
          : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-white/5"
      )}
    >
      {icon}
      {label}
    </a>
  );
}
