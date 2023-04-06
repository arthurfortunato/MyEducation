import { useEffect } from "react";

export const FullScreen = () => {
  useEffect(() => {
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

    const handleResize = () => {
      if (isMobile && fullScreenEnabled && !document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};
