import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Login.css'

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false);

    const nav = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            nav("/home");
        }
    });

    const submit = async (e: any) => {
        e.preventDefault();

        try{

            const { data } = await axios.post(
                process.env.REACT_APP_API_URL + "/auth/signin",
                {
                    username,
                    password,
                },
                { withCredentials: false }
            );

            sessionStorage.setItem("token", JSON.stringify(data.token));
            sessionStorage.setItem("id", JSON.stringify(data.id));
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${data["token"]}`;
            // console.log("DATA", data);

            axios.get(
                process.env.REACT_APP_API_URL + `/user/${JSON.stringify(data.id)}`,
                { withCredentials: false }
            ).then((res: any) => {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            })


            setNavigate(true);
        
        } catch (error: any){
            if(error.response.status === 401){
                alert('Bad credentials');
            }
        }
    };

    if (navigate) {
        return <Navigate to="/home" />;
    }
    
    return (
      <form className="login-form" onSubmit={submit} autoComplete="off">
      <h1>Login</h1>
      <div className="form-input-material">
        <input type="text" name="username" id="username" 
        placeholder=" " 
        autoComplete="new-password" required 
        className="form-control-material" 
        onChange={e => setUsername(e.target.value)}/>
        <label>Username</label>
      </div>
      <div className="form-input-material">
        <input type="password" name="password" id="password" placeholder=" " autoComplete="new-password" 
        required className="form-control-material" onChange={e => setPassword(e.target.value)}/>
        <label>Password</label>
      </div>
      <button type="submit" className="btn btn-ghost">Login</button>
    </form>
      );
};
