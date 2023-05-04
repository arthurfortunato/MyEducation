import { Routes, Route } from "react-router-dom";
import { Docker } from "../pages/Docker";
import { Introduction } from "../pages/Docker/Introduction";
import { Usage } from "../pages/Docker/Usage";
import { Commands } from "../pages/Docker/Commands";

export const DockerRoutes = () => {
  return (
    <Routes>
      <Route path="docker" element={<Docker />} />
      <Route path="docker/introduction" element={<Introduction />} />
      <Route path="docker/usage" element={<Usage />} />
      <Route path="docker/commands" element={<Commands />} />
    </Routes>
  );
};
