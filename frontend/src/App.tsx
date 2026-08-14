import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/auth/Login"
import Register from "./Components/auth/Register"
import LandingPage from "./pages/LandingPage"
import DashboardLayout from "./layouts/DashboardLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App