import { motion } from "motion/react";
import { User, Rocket } from "lucide-react";
import { clsx } from "clsx";
import { useNavigate, useLocation } from "react-router-dom";

export function PersonaSwitch() {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.pathname === "/studio" ? "studio" : "personal";

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1 rounded-full bg-zinc-900/20 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-500/10">
      <button
        onClick={() => {
          navigate("/personal");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={clsx(
          "relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 z-10",
          mode === "personal"
            ? "text-white"
            : "text-zinc-500 hover:text-zinc-300"
        )}
      >
        {mode === "personal" && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-gradient-to-r from-indigo-600/60 to-purple-600/60 rounded-full -z-10 shadow-lg shadow-indigo-500/50 backdrop-blur-md"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <User size={16} className={mode === "personal" ? "text-white" : ""} />
        <span>Personal</span>
      </button>

      <button
        onClick={() => {
          navigate("/studio");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={clsx(
          "relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 z-10",
          mode === "studio"
            ? "text-white"
            : "text-zinc-500 hover:text-zinc-300"
        )}
      >
        {mode === "studio" && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-pink-600/60 rounded-full -z-10 shadow-lg shadow-purple-500/50 backdrop-blur-md"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <Rocket size={16} className={mode === "studio" ? "text-white" : ""} />
        <span>Studio</span>
      </button>
    </div>
  );
}
