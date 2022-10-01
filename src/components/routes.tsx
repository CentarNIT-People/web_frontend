import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./Navbar/Navbar";
import { Home } from "./Home/Home";
import { Header } from "./Header/Header";
import { useStyles } from "./Home/HomeStyles";
import { FullPage } from "./Home/Users/FullPageComponents/FullPage";
import { Register } from "./Register/Register";

export const AppRoutes = () => {
    const { classes } = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <AppNavbar />
                <Header />
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path=":id" element={<FullPage />} />
                    </Route>
                    <Route path="/courses" element={<h1>Courses</h1>} />
                    <Route path="/news" element={<h1>News</h1>} />
                    <Route path="/projects" element={<h1>Projects</h1>} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
