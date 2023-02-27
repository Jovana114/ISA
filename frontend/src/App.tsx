import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashboardStaff } from "./components/Dashboard/DashboardStaff";
import { UsersList } from "./components/UsersList/UsersList";
import Redirect from "./components/Login/Redirect";
import Home from "./components/Home/Home";
import TableCenter from "./components/Table/TableCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Navigate to={"home"} />} />
        <Route path={"/user-home"} element={<Dashboard />} />
        <Route path={"/staff-home"} element={<DashboardStaff />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/redirect"} element={<Redirect />} />
        <Route path={"/users"} element={<UsersList />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/upgradedTable"} element={<TableCenter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
