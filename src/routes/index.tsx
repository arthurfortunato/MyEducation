import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { Home } from "../pages/Home";

import { ProgrammingLogic } from "../pages/ProgrammingLogic";
import { Variables } from "../pages/ProgrammingLogic/Variables";
import { Conditional } from "../pages/ProgrammingLogic/Conditional";
import { LoopRepetition } from "../pages/ProgrammingLogic/LoopsOfRepetition";
import { Vectors } from "../pages/ProgrammingLogic/Vectors";
import { Functions } from "../pages/ProgrammingLogic/Functions";
import { HigherOrderFunctions } from "../pages/ProgrammingLogic/HigherOrderFunctions";
import { Map } from "../pages/ProgrammingLogic/Map";
import { Filter } from "../pages/ProgrammingLogic/Filter";
import { Reduce } from "../pages/ProgrammingLogic/Reduce";

import { POO } from "../pages/POO";
import { IntroductionPOO } from "../pages/POO/Introduction";

export const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/programminglogic" element={<ProgrammingLogic />} />
        <Route path="programminglogic/variables" element={<Variables />} />
        <Route path="programminglogic/conditional" element={<Conditional />} />
        <Route path="programminglogic/loops" element={<LoopRepetition />} />
        <Route path="programminglogic/vectors" element={<Vectors />} />
        <Route path="programminglogic/functions" element={<Functions />} />
        <Route path="programminglogic/higherorderfunctions" element={<HigherOrderFunctions />} />
        <Route path="programminglogic/map" element={<Map />} />
        <Route path="programminglogic/filter" element={<Filter />} />
        <Route path="programminglogic/reduce" element={<Reduce />} />
        
        <Route path="/poo" element={<POO />} />
        <Route path="/poo/introduction" element={<IntroductionPOO />} />

      </Routes>
    </BrowserRouter>
  );
};
