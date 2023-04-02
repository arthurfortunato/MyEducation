import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Concepts } from "../pages/Home/Concepts";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concepts" element={<Concepts />} />
    </Routes>
  );
};
