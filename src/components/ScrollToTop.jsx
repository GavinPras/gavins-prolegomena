import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const key = pathname + search;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [key]);

  return null;
}