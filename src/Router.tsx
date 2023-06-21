import { Route, Routes } from "react-router-dom";
import Resume from "./pages/resume/Resume";
// import App from "./App";

export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/api/resume" element={<Resume />} />
    </Routes>
  );
}
