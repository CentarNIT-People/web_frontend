import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./Navbar/Navbar";
import { UsersHome } from "./Users/Users";
import { Header } from "./Header/Header";
import { useStyles } from "./Users/UsersComponents/HomeStyles";
import { FullPage } from "./Users/FullPageComponents/FullPage";
import { Register } from "./Register/Register";
import { Coworking } from "./Coworking/Coworking";
import { Home } from "./Home/Home";

export const AppRoutes = () => {
  const { classes } = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <AppNavbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Outlet />}>
            <Route index element={<UsersHome />} />
            <Route path=":id" element={<FullPage />} />
          </Route>
          <Route path="/coworking" element={<Coworking/>} />
          <Route path="/courses" element={<h1>Courses</h1>} />
          <Route path="/news" element={<h1>News</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
