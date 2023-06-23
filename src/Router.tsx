import { Route, Routes } from "react-router-dom";
import Resume from "./pages/resume/Resume";
import Main from "./pages/main/Main";
// import App from "./App";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/api/resume" element={<Resume />} />
    </Routes>
  );
}
