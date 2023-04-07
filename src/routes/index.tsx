import { BrowserRouter } from "react-router-dom";

import { StartRoutes } from "./startRoutes";
import { HomeRoutes } from "./homeRoutes";
import { ConceptsRoutes } from "./concepts";
import { ProgrammingLogicRoutes } from "./programmingLogicRoutes";
import { PooRoutes } from "./pooRoutes";

export const Routers: any = () => {
  return (
    <BrowserRouter>
      <StartRoutes />
      <HomeRoutes />
      <ConceptsRoutes />
      <ProgrammingLogicRoutes />
      <PooRoutes />
    </BrowserRouter>
  );
};
