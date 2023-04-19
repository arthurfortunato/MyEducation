import { Routes, Route } from "react-router-dom";
import { Annotations } from "../pages/Annotations";
import { Introduction } from "../pages/Annotations/Introduction";
import { SpringAnnotations } from "../pages/Annotations/SpringAnnotations";
import { Stereotype } from "../pages/Annotations/Stereotype";
import { CoreBeansAutowired } from "../pages/Annotations/CoreBeansAutowired";
import { AutowiredVSConstructor } from "../pages/Annotations/AutowiredVSConstructor";
import { CoreBeansQualifier } from "../pages/Annotations/CoreBeansQualifier";
import { CoreBeansValue } from "../pages/Annotations/CoreBeansValue";
import { CoreContextConfiguration } from "../pages/Annotations/CoreContextConfiguration";

export const AnnotationsRoutes = () => {
  return (
    <Routes>
      <Route path="annotations" element={<Annotations />} />
      <Route path="annotations/introduction" element={<Introduction />} />
      <Route path="annotations/spring-annotations" element={<SpringAnnotations />} />
      <Route path="annotations/stereotypes" element={<Stereotype />} />
      <Route path="annotations/core-beans-autowired" element={<CoreBeansAutowired />} />
      <Route path="annotations/autowired-constructor" element={<AutowiredVSConstructor />} />
      <Route path="annotations/core-beans-qualifier" element={<CoreBeansQualifier />} />
      <Route path="annotations/core-beans-value" element={<CoreBeansValue />} />
      <Route path="annotations/core-context-configuration" element={<CoreContextConfiguration />} />
    </Routes>
  );
};
