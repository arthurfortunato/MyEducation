import { Routes, Route } from "react-router-dom";
import { Collections } from "../pages/Collections";
import { Introduction } from "../pages/Collections/Introduction";
import { Interfaces } from "../pages/Collections/Interfaces";
import { Implementations } from "../pages/Collections/Implementations";
import { ImplementationsComments } from "../pages/Collections/ImplementationsComments";
import { List } from "../pages/Collections/List";
import { Set } from "../pages/Collections/Set";
import { Queue } from "../pages/Collections/Queue";
import { Map } from "../pages/Collections/Map";

export const CollectionsRoutes = () => {
  return (
    <Routes>
      <Route path="collections" element={<Collections />} />
      <Route path="collections/introduction" element={<Introduction />} />
      <Route path="collections/interfaces" element={<Interfaces />} />
      <Route path="collections/implementations" element={<Implementations />} />
      <Route path="collections/implementations/comments" element={<ImplementationsComments />} />
      <Route path="collections/list" element={<List />} />
      <Route path="collections/set" element={<Set />} />
      <Route path="collections/queue" element={<Queue />} />
      <Route path="collections/map" element={<Map />} />
    </Routes>
  );
};
