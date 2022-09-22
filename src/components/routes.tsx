import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./Navbar/Navbar";
import { Home } from "./Home/Home";
import { Header } from "./Header/Header";
import { useStyles } from "./Home/HomeStyles";

export const AppRoutes = () => {
  const { classes } = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <AppNavbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<h1>Users</h1>} />
          <Route path="/projects" element={<h1>Users</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
