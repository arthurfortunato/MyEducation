import { Routes, Route } from "react-router-dom";
import { Annotations } from "../pages/Annotations";
import { Introduction } from "../pages/Annotations/Introduction";
import { SpringAnnotations } from "../pages/Annotations/SpringAnnotations";
import { Stereotype } from "../pages/Annotations/Stereotype";
import { CoreBeansAutowired } from "../pages/Annotations/CoreBeansAutowired";
import { AutowiredVSConstructor } from "../pages/Annotations/AutowiredVSConstructor";

export const AnnotationsRoutes = () => {
  return (
    <Routes>
      <Route path="annotations" element={<Annotations />} />
      <Route path="annotations/introduction" element={<Introduction />} />
      <Route path="annotations/spring-annotations" element={<SpringAnnotations />} />
      <Route path="annotations/stereotypes" element={<Stereotype />} />
      <Route path="annotations/core-beans-autowired" element={<CoreBeansAutowired />} />
      <Route path="annotations/autowired-constructor" element={<AutowiredVSConstructor />} />
    </Routes>
  );
};
