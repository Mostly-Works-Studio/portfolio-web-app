import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PersonalPortfolio } from "./components/PersonalPortfolio";
import { StudioPortfolio } from "./components/StudioPortfolio";
import { PersonaSwitch } from "./components/PersonaSwitch";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-indigo-500/30">
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
