import { Routes, Route } from "react-router-dom";
import { Docker } from "../pages/Docker";
import { Introduction } from "../pages/Docker/Introduction";
import { Usage } from "../pages/Docker/Usage";
import { Commands } from "../pages/Docker/Commands";
import { ExampleReact } from "../pages/Docker/ExampleReact";

export const DockerRoutes = () => {
  return (
    <Routes>
      <Route path="docker" element={<Docker />} />
      <Route path="docker/introduction" element={<Introduction />} />
      <Route path="docker/usage" element={<Usage />} />
      <Route path="docker/commands" element={<Commands />} />
      <Route path="docker/example-react" element={<ExampleReact />} />
    </Routes>
  );
};
