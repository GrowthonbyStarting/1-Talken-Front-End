import { Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import App from "./App";

export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
