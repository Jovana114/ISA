import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './SignUpForm.css'

export const Signup = () => {
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [empscho, setEmpscho] = useState("");
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState("");
    const [jmbg, setJmbg] = useState("");
    const [occupation, setOccupation] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

    const [navigate, setNavigate] = useState(false);

    const nav = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            if(JSON.parse(sessionStorage.getItem("user")!).roles[0].name === "ROLE_USER"){
                nav("user-home")
            }
            else if(JSON.parse(sessionStorage.getItem("user")!).roles[0].name === "ROLE_STAFF"){
                nav("/staff-home");
            }
            nav("/admin-home");
        }
    });

    const submit = async (e: any) => {
        e.preventDefault();

        try{

            const { data } = await axios.post(
                process.env.REACT_APP_API_URL + "/auth/signup",
                {
                     adress,
                     city,
                     email,
                     empscho,
                     firstName,
                     gender,
                     jmbg,
                     occupation,
                     phone,
                     state,
                     surname,
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
            sessionStorage.setItem("role", JSON.stringify(res.data.roles[0].name));
            })


            setNavigate(true);
        
        } catch (error: any){
            if(error.response.status === 401){
                alert('Bad credentials');
            }
        }
    };

    if (navigate) {
        return <Navigate to="/redirect" />        
    }
    
    return (
      <form className="login-form" onSubmit={submit} autoComplete="off">
       <h1>Sign Up</h1>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="adress">Adress:</label>
                  <input type='text' name='adress' id='adress' onChange={e => setAdress(e.target.value)} placeholder="Adress" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="city">City:</label>
                  <input type='text' name='city' id='city' onChange={e => setCity(e.target.value)} placeholder="City" autoComplete="new-password" required/>
               </div>                           
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="email">Email:</label>
                  <input type='email' name='email' id='email' onChange={e => setEmail(e.target.value)} placeholder="Email" autoComplete="new-password" required/>
               </div> 
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="empscho">Empscho:</label>
                  <input type='text' name='empscho' id='empscho' onChange={e => setEmpscho(e.target.value)} placeholder="Empscho" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="firstName">First name:</label>
                  <input type='text' name='firstName' id='firstName' onChange={e => setFirstName(e.target.value)} placeholder="First name" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="gender">Gender:</label>
                  <input type='text' name='gender' id='gender' onChange={e => setGender(e.target.value)} placeholder="Gender" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
               <br></br>
                  <br></br>
                  <label htmlFor="jmbg">JMBG:</label>
                  <input type='text' name='jmbg' id='jmbg' onChange={e => setJmbg(e.target.value)} placeholder="JMBG" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="ocucupation">Occupation:</label>
                  <input type='text' name='ocucupation' id='ocucupation' onChange={e => setOccupation(e.target.value)} placeholder="Occupation" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="phone">Phone:</label>
                  <input type='text' name='phone' id='phone' onChange={e => setPhone(e.target.value)} placeholder="Phone" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="state">State:</label>
                  <input type='text' name='state' id='state' onChange={e => setState(e.target.value)} placeholder="State" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="surname">Surname:</label>
                  <input type='text' name='surname' id='surname' onChange={e => setSurname(e.target.value)} placeholder="Surname" autoComplete="new-password" required/>
               </div>
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="username">Username:</label>
                  <input type='text' name='username' id='username' onChange={e => setUsername(e.target.value)} placeholder="Username" autoComplete="new-password" required/>
               </div>     
               <div className='form-input-material'>
                  <br></br>
                  <br></br>
                  <label htmlFor="password">Password::</label>
                  <input type='password' name='password' id='password' onChange={e => setPassword(e.target.value)} placeholder="Password" autoComplete="new-password" required/>
               </div>                          
               <button type="submit" className="btn btn-ghost">Sign up</button>
    </form>
      );
};