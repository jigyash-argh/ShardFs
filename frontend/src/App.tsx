import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./Components/auth/Login"
import Register from "./Components/auth/Register"
import LandingPage from "./pages/LandingPage"

import DashboardLayout from "./layouts/DashboardLayout"
import ProtectedRoute from "./routes/ProtectedRoute"

import Overview from "./pages/dashboard/Overview"
import Files from "./pages/dashboard/Files"
import StorageNodes from "./pages/dashboard/StorageNodes"
import Replication from "./pages/dashboard/Replication"
import Backups from "./pages/dashboard/Backups"
import Settings from "./pages/dashboard/Settings"

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route element={<ProtectedRoute />}>

                    <Route
                        path="/dashboard"
                        element={<DashboardLayout />}
                    >

                        <Route
                            index
                            element={<Overview />}
                        />

                        <Route
                            path="files"
                            element={<Files />}
                        />

                        <Route
                            path="nodes"
                            element={<StorageNodes />}
                        />

                        <Route
                            path="replication"
                            element={<Replication />}
                        />

                        <Route
                            path="backups"
                            element={<Backups />}
                        />

                        <Route
                            path="settings"
                            element={<Settings />}
                        />

                    </Route>

                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default App