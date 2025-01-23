import { Route, Routes, useNavigation, useNavigate } from "react-router";
import { useAuth } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  const { authenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}
