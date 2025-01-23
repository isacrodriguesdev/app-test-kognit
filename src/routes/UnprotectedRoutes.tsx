import { Routes, Route } from "react-router";
import { LoginPage } from "../pages/LoginPage";

export default function UnprotectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
