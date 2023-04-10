import { Routes, Route } from "react-router-dom";
import { Collections } from "../pages/Collections";
import { Introduction } from "../pages/Collections/Introduction";
import { Interfaces } from "../pages/Collections/Interfaces";
import { Implementations } from "../pages/Collections/Implementations";
import { ImplementationsComments } from "../pages/Collections/ImplementationsComments";

export const CollectionsRoutes = () => {
  return (
    <Routes>
      <Route path="collections" element={<Collections />} />
      <Route path="collections/introduction" element={<Introduction />} />
      <Route path="collections/interfaces" element={<Interfaces />} />
      <Route path="collections/implementations" element={<Implementations />} />
      <Route path="collections/implementations/comments" element={<ImplementationsComments />} />
    </Routes>
  );
};
