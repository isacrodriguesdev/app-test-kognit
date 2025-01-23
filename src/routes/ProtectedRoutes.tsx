import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "../pages/HomePage";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
