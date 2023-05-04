import { Route, Routes } from "react-router-dom";

import { ProgrammingLogic } from "../pages/ProgrammingLogic";
import { Introduction } from "../pages/ProgrammingLogic/Introduction";
import { ConditionalIfElse } from "../pages/ProgrammingLogic/ConditionalIfElse";
import { ConditionalTernary } from "../pages/ProgrammingLogic/ConditionalTernary";
import { ConditionalSwitch } from "../pages/ProgrammingLogic/ConditionalSwitch";
import { LogicalOperators } from "../pages/ProgrammingLogic/LogicalOperators";
import { While } from "../pages/ProgrammingLogic/While";
import { DoWhile } from "../pages/ProgrammingLogic/DoWhile";
import { For } from "../pages/ProgrammingLogic/For";

export const ProgrammingLogicRoutes = () => {
  return (
    <Routes>
      <Route path="programminglogic" element={<ProgrammingLogic />} />
      <Route path="programminglogic/introduction" element={<Introduction />} />
      <Route
        path="programminglogic/logical-operators"
        element={<LogicalOperators />}
      />
      <Route
        path="programminglogic/conditional-if-else"
        element={<ConditionalIfElse />}
      />
      <Route
        path="programminglogic/conditional-ternary"
        element={<ConditionalTernary />}
      />
      <Route
        path="programminglogic/conditional-switch"
        element={<ConditionalSwitch />}
      />
      <Route path="programminglogic/while" element={<While />} />
      <Route path="programminglogic/do-while" element={<DoWhile />} />
      <Route path="programminglogic/for" element={<For />} />
    </Routes>
  );
};
