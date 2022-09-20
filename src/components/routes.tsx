import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./Navbar/Navbar";
import { Home } from "./Home/Home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div style={{ display: "flex" }}>
                <AppNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/news" element={<h1>Users</h1>} />
                    <Route path="/projects" element={<h1>Users</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
