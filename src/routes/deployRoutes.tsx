import { Routes, Route } from "react-router-dom";
import { Deploy } from "../pages/Deploy";
import { Introduction } from "../pages/Deploy/Introduction";
import { FlyDeployJava } from "../pages/Deploy/FlyDeployJava";

export const DeployRoutes = () => {
  return (
    <Routes>
      <Route path="deploy" element={<Deploy />} />
      {<Route path="deploy/introduction" element={<Introduction />} />}
      {<Route path="deploy/fly-java" element={<FlyDeployJava />} />}
    </Routes>
  );
};
