import { Route, Routes } from "react-router-dom";
import { POO } from "../pages/POO";
import { ClassAndObject } from "../pages/POO/Classe";
import { Encapsulation } from "../pages/POO/Encapsulation";
import { Inheritance } from "../pages/POO/Inheritance";
import { IntroductionPOO } from "../pages/POO/Introduction";
import { Polymorphism } from "../pages/POO/Polymorphism";

export const PooRoutes = () => {
  return (
    <Routes>
      <Route path="/poo" element={<POO />} />
      <Route path="/poo/introduction" element={<IntroductionPOO />} />
      <Route path="/poo/class" element={<ClassAndObject />} />
      <Route path="/poo/polymorphism" element={<Polymorphism />} />
      <Route path="/poo/inheritance" element={<Inheritance />} />
      <Route path="/poo/encapsulation" element={<Encapsulation />} />
    </Routes>
  );
};
