import { Route, Routes } from "react-router-dom";

import { Node } from "../pages/Node/index";
import { IntroductionNode } from "../pages/Node/Introduction";
import { Express } from "../pages/Node/Express";
import { ORM } from "../pages/Node/ORM";
import { NodeMap } from "../pages/Node/Map";
import { Microservice } from "../pages/Node/Microservice";

export const NodeRoutes = () => {
  return (
    <Routes>
      <Route path="/node" element={<Node />} />
      <Route path="node/introduction" element={<IntroductionNode />} />
      <Route path="node/express" element={<Express />} />
      <Route path="node/orm" element={<ORM />} />
      <Route path="node/map" element={<NodeMap />} />
      <Route path="node/microservice" element={<Microservice />} />
    </Routes>
  );
};
