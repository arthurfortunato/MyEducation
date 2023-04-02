import { Route, Routes } from "react-router-dom";
import { Java } from "../pages/Java";
import { AbstractClass } from "../pages/Java/AbstractClass";
import { Interface } from "../pages/Java/Interface";
import { JDBC } from "../pages/Java/JDBC";
import { JDK } from "../pages/Java/JDK";
import { JVM } from "../pages/Java/JVM";
import { Maven } from "../pages/Java/Maven";
import { SpringBoot } from "../pages/Java/SpringBoot";
import { SpringFramework } from "../pages/Java/SpringFramework";

export const JavaRoutes = () => {
  return (
    <Routes>
      <Route path="/java" element={<Java />} />
      <Route path="/java/spring" element={<SpringFramework />} />
      <Route path="/java/jvm" element={<JVM />} />
      <Route path="/java/jdk" element={<JDK />} />
      <Route path="/java/jdbc" element={<JDBC />} />
      <Route path="/java/maven" element={<Maven />} />
      <Route path="/java/springboot" element={<SpringBoot />} />
      <Route path="/java/interface" element={<Interface />} />
      <Route path="/java/abstract-class" element={<AbstractClass />} />
    </Routes>
  );
};
