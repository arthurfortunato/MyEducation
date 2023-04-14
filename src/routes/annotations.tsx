import { Routes, Route } from "react-router-dom";
import { Annotations } from "../pages/Annotations";
import { Introduction } from "../pages/Annotations/Introduction";

export const AnnotationsRoutes = () => {
  return (
    <Routes>
      <Route path="annotations" element={<Annotations />} />
      <Route path="annotations/introduction" element={<Introduction />} />
    </Routes>
  );
};
