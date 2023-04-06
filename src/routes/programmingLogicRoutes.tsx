import { Route, Routes } from "react-router-dom";

import { ProgrammingLogic } from "../pages/ProgrammingLogic";
import { Introduction } from "../pages/ProgrammingLogic/Introduction";
import { Variables } from "../pages/ProgrammingLogic/Variables";
import { Conditional } from "../pages/ProgrammingLogic/Conditional";
import { LoopRepetition } from "../pages/ProgrammingLogic/LoopsOfRepetition";
import { Vectors } from "../pages/ProgrammingLogic/Vectors";
import { Functions } from "../pages/ProgrammingLogic/Functions";
import { HigherOrderFunctions } from "../pages/ProgrammingLogic/HigherOrderFunctions";
import { Map } from "../pages/ProgrammingLogic/Map";
import { Filter } from "../pages/ProgrammingLogic/Filter";
import { Reduce } from "../pages/ProgrammingLogic/Reduce";
import { LogicalOperators } from "../pages/ProgrammingLogic/LogicalOperators";

export const ProgrammingLogicRoutes = () => {
  return (
    <Routes>
      <Route path="programminglogic" element={<ProgrammingLogic />} />
      <Route path="programminglogic/introduction" element={<Introduction />} />
      <Route path="programminglogic/logical-operators" element={<LogicalOperators />} />
      <Route path="programminglogic/conditional" element={<Conditional />} />
      <Route path="programminglogic/variables" element={<Variables />} />

      <Route path="programminglogic/loops" element={<LoopRepetition />} />
      <Route path="programminglogic/vectors" element={<Vectors />} />
      <Route path="programminglogic/functions" element={<Functions />} />
      <Route
        path="package.jsonprogramminglogic/higherorderfunctions"
        element={<HigherOrderFunctions />}
      />
      <Route path="programminglogic/map" element={<Map />} />
      <Route path="programminglogic/filter" element={<Filter />} />
      <Route path="programminglogic/reduce" element={<Reduce />} />
    </Routes>
  );
};
