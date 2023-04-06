import { Routes, Route } from "react-router-dom";
import { Start } from "../pages/Start";

export const StartRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>
  );
};
