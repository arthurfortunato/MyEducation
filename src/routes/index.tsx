import { BrowserRouter } from "react-router-dom";

import { HomeRoutes } from "./homeRoutes";
import { ConceptsRoutes } from "./concepts";
import { ProgrammingLogicRoutes } from "./programmingLogicRoutes";
import { PooRoutes } from "./pooRoutes";
import { NodeRoutes } from "./nodeRoutes";
import { JavaRoutes } from "./javaRoutes";
import { ReactRoutes } from "./reactRoutes";
import { DockerRoutes } from "./dockerRoutes";

export const Routers: any = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ConceptsRoutes />
{/*       <ProgrammingLogicRoutes />
      <PooRoutes />
      <NodeRoutes />
      <JavaRoutes />
      <ReactRoutes />
      <DockerRoutes /> */}
    </BrowserRouter>
  );
};
