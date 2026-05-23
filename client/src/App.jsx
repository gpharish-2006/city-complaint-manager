import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Complaints from "./pages/Complaints";
import Track from "./pages/Track";
import CreateComplaint from "./pages/CreateComplaint";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import ProtectedAdminRoute from "./pages/ProtectedAdminRoute";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

function Navigation() {

  const location = useLocation();

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return <Navbar />;
}

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/complaints" element={<ProtectedRoute><Complaints /></ProtectedRoute>} />
        <Route path="/track" element={<ProtectedRoute><Track /></ProtectedRoute>} />
        <Route path="/create-complaint" element={<ProtectedRoute><CreateComplaint /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;