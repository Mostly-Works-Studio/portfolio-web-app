import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PersonalPortfolio } from "./components/PersonalPortfolio";
import { StudioPortfolio } from "./components/StudioPortfolio";
import { PersonaSwitch } from "./components/PersonaSwitch";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30 relative overflow-hidden">
        {/* Static gradient background - lightweight alternative to animated blurs */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 md:-top-48 md:-left-48 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-purple-600/6 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 sm:-bottom-32 sm:-right-32 md:-bottom-48 md:-right-48 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-indigo-600/6 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 md:-top-48 md:-right-48 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-indigo-600/6 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 md:-bottom-48 md:-left-48 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-purple-600/6 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-pink-600/6 rounded-full blur-3xl"></div>
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
    </HelmetProvider>
  );
}

export default App;
