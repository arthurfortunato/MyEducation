import { BrowserRouter } from "react-router-dom";

import { HomeRoutes } from "./homeRoutes";
import { ConceptsRoutes } from "./concepts";
import { ProgrammingLogicRoutes } from "./programmingLogicRoutes";

export const Routers: any = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const fullScreenEnabled =
    document.fullscreenEnabled ||
    (document as any).webkitFullscreenEnabled ||
    (document as any).mozFullScreenEnabled ||
    (document as any).msFullscreenEnabled ||
    false;

  if (isMobile && fullScreenEnabled) {
    document.documentElement.requestFullscreen();
  }
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ConceptsRoutes />
      <ProgrammingLogicRoutes />
    </BrowserRouter>
  );
};
