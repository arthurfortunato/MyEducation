import { Routes, Route } from "react-router-dom";
import { Docker } from "../pages/Docker";
import { AdvantagesAndDisadvantages } from "../pages/Docker/AdvantagesAndDisadvantages";
import { Architecture } from "../pages/Docker/Architecture";
import { IntroductionDocker } from "../pages/Docker/Introduction";

export const DockerRoutes = () => {
  return (
    <Routes>
      <Route path="/docker" element={<Docker />} />
      <Route path="/docker/introduction" element={<IntroductionDocker />} />
      <Route
        path="/docker/advantagesanddisadvantages"
        element={<AdvantagesAndDisadvantages />}
      />
      <Route path="/docker/architecture" element={<Architecture />} />
    </Routes>
  );
};
