import { Routes, Route } from "react-router-dom";
import { Annotations } from "../pages/Annotations";
import { Introduction } from "../pages/Annotations/Introduction";
import { SpringAnnotations } from "../pages/Annotations/SpringAnnotations";
import { Stereotype } from "../pages/Annotations/Stereotype";

export const AnnotationsRoutes = () => {
  return (
    <Routes>
      <Route path="annotations" element={<Annotations />} />
      <Route path="annotations/introduction" element={<Introduction />} />
      <Route path="annotations/spring-annotations" element={<SpringAnnotations />} />
      <Route path="annotations/stereotypes" element={<Stereotype />} />
    </Routes>
  );
};
