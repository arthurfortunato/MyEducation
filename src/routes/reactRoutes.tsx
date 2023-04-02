import { Routes, Route } from "react-router-dom";
import { React } from "../pages/React/index";
import { IntroductionReact } from "../pages/React/Introduction";
import { Hooks } from "../pages/React/Hooks";

export const ReactRoutes = () => {
  return (
    <Routes>
        <Route path="/react" element={<React />} />
        <Route path="/react/introduction" element={<IntroductionReact />} />
        <Route path="/react/hooks" element={<Hooks />} />
    </Routes>
  );
};
