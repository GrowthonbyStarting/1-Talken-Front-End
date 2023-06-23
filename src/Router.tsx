import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Resume from "./pages/resume/Resume";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/api/resume" element={<Resume />} />
      <Route path="/users/login" element={<Login />} />
    </Routes>
  );
}
