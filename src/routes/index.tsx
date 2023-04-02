import { BrowserRouter } from "react-router-dom";

import { Sidebar } from "../components/Sidebar/Sidebar";

import { HomeRoutes } from "./homeRoutes";
import { ProgrammingLogicRoutes } from "./programmingLogicRoutes";
import { PooRoutes } from "./pooRoutes";
import { NodeRoutes } from "./nodeRoutes";
import { JavaRoutes } from "./javaRoutes";
import { ReactRoutes } from "./reactRoutes";
import { DockerRoutes } from "./dockerRoutes";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Sidebar />

      <HomeRoutes />
      <ProgrammingLogicRoutes />
      <PooRoutes />
      <NodeRoutes />
      <JavaRoutes />
      <ReactRoutes />
      <DockerRoutes />
    </BrowserRouter>
  );
};
