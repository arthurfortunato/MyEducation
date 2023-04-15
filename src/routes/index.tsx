import { BrowserRouter } from "react-router-dom";

import { StartRoutes } from "./startRoutes";
import { HomeRoutes } from "./homeRoutes";
import { ConceptsRoutes } from "./concepts";
import { ProgrammingLogicRoutes } from "./programmingLogicRoutes";
import { PooRoutes } from "./pooRoutes";
import { JavaRoutes } from "./javaRoutes";
import { CollectionsRoutes } from "./collections";
import { AnnotationsRoutes } from "./annotations";

export const Routers: any = () => {
  return (
    <BrowserRouter>
      <StartRoutes />
      <HomeRoutes />
      <ConceptsRoutes />
      <ProgrammingLogicRoutes />
      <PooRoutes />
      <JavaRoutes />
      <CollectionsRoutes />
      <AnnotationsRoutes />
    </BrowserRouter>
  );
};
