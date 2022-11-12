// import "bootstrap/dist/css/bootstrap.min.css"
// import "./App.css"
// import { BrowserRouter as  Router, Routes, Route, redirect } from "react-router-dom"
// import useToken from "./useToken";
// import { useEffect, useState } from "react";
// import Login from "./components/Login/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import NavigationBar from "./components/Navigation/NavigationBar";

// function App() {
//   // return (
//   //   <BrowserRouter><Routes><Route path="/auth" element={<Auth />} /></Routes></BrowserRouter>
//   // )

//   const { token, setToken } = useToken();
//   const [hasToken, setHasToken] = useState(false);

//   useEffect(() => {
//     const tokenString = sessionStorage.getItem('token');
//     // console.log(tokenString);

//     if(tokenString != null || undefined){
//       setHasToken(true)
//     }else{
//       setHasToken(false)
//     }
//   }, [hasToken])

//   const setTokenAndNavigate = () => {

//   }
//   return (
//     <>
//       <div className="wrapper">
//         <Router>
//           <Routes>
//             <Route path="/" element={ !hasToken ? <Login setToken={
//               setToken
//             } /> : <NavigationBar />} />
//             <Route path="/home" element={<NavigationBar />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             {/* <Route path="/profile" element={<Profile />} /> */}
//           </Routes>
//         </Router>
//       </div>
//     </>
//   )

// }

// export default App

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const [shouldRedirect, setShouldRedirect] = useState(Boolean);

  
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setShouldRedirect(sessionStorage.getItem("user") !== null);
  //     } catch (e) {
        
  //     }
  //   })();
  // }, []);
  


  return (
    <BrowserRouter>
      {/* <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
            </ul>

            <div className="text-end">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header> */}

      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<Login />}/>
        {/* <Route path="*" element={}/> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
