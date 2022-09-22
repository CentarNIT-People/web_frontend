import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Header />} />
                <Route path="/news" element={<Header />} />
                <Route path="/projects" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
};
