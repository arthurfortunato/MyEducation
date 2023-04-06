import { BrowserRouter } from "react-router-dom";

import { HomeRoutes } from "./homeRoutes";
import { ConceptsRoutes } from "./concepts";
import { ProgrammingLogicRoutes } from "./programmingLogicRoutes";

export const Routers: any = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ConceptsRoutes />
      <ProgrammingLogicRoutes />
    </BrowserRouter>
  );
};
