import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top for each page navigation bcz of Spa apps default behavior
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
