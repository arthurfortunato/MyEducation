import { Routes, Route } from "react-router-dom";
import { NewRelic } from "../pages/NewRelic";
import { Introduction } from "../pages/NewRelic/Introduction";
import { APM } from "../pages/NewRelic/APM";

export const NewRelicRoutes = () => {
  return (
    <Routes>
      <Route path="new-relic" element={<NewRelic />} />
      <Route path="new-relic/introduction" element={<Introduction />} />
      <Route path="new-relic/apm" element={<APM />} />
    </Routes>
  );
};
