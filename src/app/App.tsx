import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { PersonalPortfolio } from "./components/PersonalPortfolio";
import { StudioPortfolio } from "./components/StudioPortfolio";
import { PersonaSwitch } from "./components/PersonaSwitch";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30">
        {/* Global Animated Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <motion.div
            animate={{
              opacity: [0.35, 0.45, 0.35],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              opacity: [0.35, 0.45, 0.35],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-600/25 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{
              opacity: [0.35, 0.45, 0.35],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px]"
          />
        </div>

        <main className="relative z-10 min-h-screen flex flex-col">
          <Routes>
            <Route path="/personal" element={<PersonalPortfolio />} />
            <Route path="/studio" element={<StudioPortfolio />} />
            <Route path="/*" element={<Navigate to="/personal" replace />} />
          </Routes>
        </main>

        <PersonaSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
