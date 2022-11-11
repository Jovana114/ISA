import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as  Router, Routes, Route, redirect } from "react-router-dom"
import useToken from "./useToken";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import NavigationBar from "./components/Navigation/NavigationBar";

function App() {
  // return (
  //   <BrowserRouter><Routes><Route path="/auth" element={<Auth />} /></Routes></BrowserRouter>
  // )




  const { token, setToken } = useToken();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const tokenString = sessionStorage.getItem('token');
    // console.log(tokenString);
    
    if(tokenString != null || undefined){
      setHasToken(true)
    }else{
      setHasToken(false)
    }
  }, [hasToken])
  
  const setTokenAndNavigate = () => {
    
  }
  return (
    <>
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={ !hasToken ? <Login setToken={
              setToken 
            } /> : <NavigationBar />} />
            <Route path="/home" element={<NavigationBar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  )
  

}

export default App
