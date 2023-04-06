import { Routes, Route } from "react-router-dom";
import { Concepts } from "../pages/Concepts";
import { ConceptsApi } from "../pages/Concepts/Api";
import { ConceptsRest } from "../pages/Concepts/Rest";
import { ConceptsRestFull } from "../pages/Concepts/RestFull";
import { ConceptsStatusCode } from "../pages/Concepts/StatusCode";

export const ConceptsRoutes = () => {
  return (
    <Routes>
      <Route path="concepts" element={<Concepts />} />
      <Route path="concepts/api" element={<ConceptsApi />} />
      <Route path="concepts/rest" element={<ConceptsRest />} />
      <Route path="concepts/rest-full" element={<ConceptsRestFull />} />
      <Route path="concepts/status-code" element={<ConceptsStatusCode />} />
    </Routes>
  );
};
