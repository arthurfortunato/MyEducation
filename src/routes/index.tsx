import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { Home } from "../pages/Home";
import { ProgrammingLogic } from "../pages/ProgrammingLogic";

export const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programminglogic" element={<ProgrammingLogic />} />
      </Routes>
    </BrowserRouter>
  );
};
