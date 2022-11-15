import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const [shouldRedirect, setShouldRedirect] = useState(Boolean);

  return (
    <BrowserRouter>

      <Routes>
        <Route path={"/home" || "/"} element={<Dashboard />} />
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={ <Navigate to="/home" />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
