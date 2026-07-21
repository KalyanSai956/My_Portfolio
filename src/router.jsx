import { Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}