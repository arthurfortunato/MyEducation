import { BrowserRouter } from "react-router-dom";

import { HomeRoutes } from "./homeRoutes";
import { ConceptsRoutes } from "./concepts";

export const Routers: any = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ConceptsRoutes />
    </BrowserRouter>
  );
};
