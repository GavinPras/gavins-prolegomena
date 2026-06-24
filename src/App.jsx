import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import EssayPage from "./pages/EssayPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/essay" element={<EssayPage />} />
      {}
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
}
