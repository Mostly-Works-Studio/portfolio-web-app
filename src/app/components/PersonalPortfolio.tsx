import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Mail, MapPin, Cpu, BriefcaseBusiness, GraduationCap, Milestone, Heart, Building2, UserRound, ChevronDown, ChevronUp } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiLeetcode,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiGraphql,
  SiRedis,
  SiFigma,
  SiSpringboot,
  SiApachekafka,
  SiCloudflareworkers,
  SiMysql,
  SiCaffeine,
  SiCloudflare
} from "react-icons/si";
import { TechBadge } from "./TechBadge";
import { personalData } from "../data/personalData";

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

const getTechIcon = (tech: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    "GraphQL": <SiGraphql />,
    "Redis": <SiRedis />,
    "Spring Boot": <SiSpringboot />,
    "Kafka": <SiApachekafka />,
    "Cloudflare Workers": <SiCloudflareworkers />,
    "MySQL": <SiMysql />,
    "Caffeine": <SiCaffeine />,
    "Cloudflare": <SiCloudflare />,
  };
  return iconMap[tech] || null;
};

export function PersonalPortfolio() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const experienceToShow = showAllExperience ? personalData.experience : personalData.experience.slice(0, 2);

  useEffect(() => {
    document.title = personalData.profile.name;

    // Update favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon-personal.png";
    }
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-5xl mx-auto px-6 py-24 pb-32"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="flex flex-col md:flex-row gap-10 items-center mb-32">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-100"></div>
          <img
            src={personalData.profile.image}
            alt="Profile"
            className="relative w-48 h-48 object-cover rounded-full border-2 border-white/10 shadow-2xl"
          />
        </div>

        <div className="text-center md:text-left flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 mb-4 tracking-tighter">
              {personalData.profile.name}
            </h1>
            <p className="text-xl text-indigo-400 mb-6 font-medium flex items-center justify-center md:justify-start gap-2">
              <BriefcaseBusiness size={20} /> {personalData.profile.title}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-zinc-400 mb-8">
            <motion.a
              initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.2)", scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              href={personalData.contact.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-pointer"
            >
              <Building2 size={14} className="text-cyan-500" /> {personalData.contact.company}
            </motion.a>
            <motion.a
              initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.2)", scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              href={personalData.contact.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-pointer"
            >
              <MapPin size={14} className="text-pink-500" /> {personalData.contact.location}
            </motion.a>
            <motion.a
              initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.2)", scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              href={`mailto:${personalData.contact.email}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-pointer"
            >
              <Mail size={14} className="text-purple-500" /> {personalData.contact.email}
            </motion.a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <SocialButton icon={<SiGithub size={20} />} label="GitHub" href={personalData.social.github} />
            <SocialButton icon={<SiLinkedin size={20} />} label="LinkedIn" href={personalData.social.linkedin} />
            <SocialButton icon={<SiLeetcode size={20} />} label="LeetCode" href={personalData.social.leetcode} />
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-12 mb-16">
        {/* Main Content */}
        <div className="md:col-span-8 space-y-16">

          {/* About */}
          <motion.section variants={item} className="bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <UserRound size={24} className="text-indigo-400" />
              About Me
            </h2>
            <p className="text-zinc-400 leading-loose text-lg whitespace-pre-line">
              {personalData.about}
            </p>
          </motion.section>

          {/* Experience */}
          <motion.section variants={item}>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Milestone size={24} className="text-indigo-400" />
              Experience
            </h2>
            <div className="space-y-6">
              {experienceToShow.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  role={exp.role}
                  company={exp.company}
                  fromDate={exp.fromDate}
                  toDate={exp.toDate}
                  description={exp.description}
                />
              ))}
            </div>

            {personalData.experience.length > 2 && (
              <div className="flex justify-center mt-6">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAllExperience(!showAllExperience)}
                  className="text-zinc-400 hover:text-indigo-400 font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {showAllExperience ? (
                    <>
                      View Less <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      View More <ChevronDown size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.section>

        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-12">

          {/* Skills */}
          <motion.section variants={item}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu size={20} className="text-indigo-400" /> Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalData.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} icon={getTechIcon(tech)} />
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={item} className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-indigo-400" /> Education
            </h3>
            <div>
              <h4 className="font-bold text-white text-lg">{personalData.education.degree}</h4>
              <p className="text-indigo-400 font-medium">{personalData.education.institution}</p>
              <p className="text-sm text-zinc-500 mt-2">{personalData.education.period}</p>
              <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                {personalData.education.description}
              </p>
            </div>
          </motion.section>

        </div>
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

function ExperienceItem({ role, company, fromDate, toDate, description }: { role: string, company: string, fromDate: string, toDate: string | null, description: string }) {
  // Parse dates in DD/MM/YYYY format
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

  // Format date as "MMM, YYYY"
  const formatDate = (dateStr: string) => {
    const date = parseDate(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Calculate duration
  const calculateDuration = (from: string, to: string | null) => {
    const fromDate = parseDate(from);
    const toDate = to ? parseDate(to) : new Date();

    const years = toDate.getFullYear() - fromDate.getFullYear();
    const months = toDate.getMonth() - fromDate.getMonth();

    const totalMonths = years * 12 + months;
    const finalYears = Math.floor(totalMonths / 12);
    const finalMonths = totalMonths % 12;

    if (finalYears === 0) {
      return `${finalMonths} ${finalMonths === 1 ? 'month' : 'months'}`;
    } else if (finalMonths === 0) {
      return to ? `${finalYears} ${finalYears === 1 ? 'year' : 'years'}` : `${finalYears}+ ${finalYears === 1 ? 'year' : 'years'}`;
    } else {
      return to ? `${finalYears} ${finalYears === 1 ? 'year' : 'years'} ${finalMonths} ${finalMonths === 1 ? 'month' : 'months'}` : `${finalYears}+ years`;
    }
  };

  const displayDate = `${formatDate(fromDate)} - ${toDate ? formatDate(toDate) : 'Present'}`;
  const duration = calculateDuration(fromDate, toDate);

  return (
    <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5">
      <div className="flex flex-row items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h4 className="text-lg font-bold text-white">{role}</h4>
            <span className="text-xs text-zinc-500">• {duration}</span>
          </div>
          <div className="text-sm font-medium text-zinc-400 mt-1">{company}</div>
        </div>
        <span className="text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap shrink-0">{displayDate}</span>
      </div>

      <div className="text-zinc-400 leading-relaxed text-sm whitespace-pre-line">
        {description}
      </div>
    </div>
  );
}
