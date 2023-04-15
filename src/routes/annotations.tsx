import { Routes, Route } from "react-router-dom";
import { Annotations } from "../pages/Annotations";
import { Introduction } from "../pages/Annotations/Introduction";
import { SpringAnnotations } from "../pages/Annotations/SpringAnnotations";

export const AnnotationsRoutes = () => {
  return (
    <Routes>
      <Route path="annotations" element={<Annotations />} />
      <Route path="annotations/introduction" element={<Introduction />} />
      <Route path="annotations/spring-annotations" element={<SpringAnnotations />} />
    </Routes>
  );
};
