import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { Home } from "../pages/Home";
import { ProgrammingLogic } from "../pages/ProgrammingLogic";
import { Variables } from "../pages/ProgrammingLogic/Variables";
import { Conditional } from "../pages/ProgrammingLogic/Conditional";

export const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programminglogic" element={<ProgrammingLogic />} />
        <Route path="programminglogic/variables" element={<Variables />} />
        <Route path="programminglogic/conditional" element={<Conditional />} />
      </Routes>
    </BrowserRouter>
  );
};
