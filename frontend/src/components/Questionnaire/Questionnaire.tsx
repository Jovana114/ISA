import './Questionnaire.css';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

  
export class SignUp extends React.Component{
    handleChange = () => {}
    handleSubmit = () => {}
    
    render() {
       return (
         <div className='form-wrapper'>
           <div className='form-wrapper'>
           <form onSubmit={this.handleSubmit} autoComplete="off" className="form" >
              <h1>Sign Up</h1>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="adress">Adress:</label>
                    <input type='text' name='adress' id='adress' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="city">City:</label>
                    <input type='text' name='city' id='city' onChange={this.handleChange}/>
                 </div>                           
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="email">Email:</label>
                    <input type='email' name='email' id='email' onChange={this.handleChange}/>
                 </div> 
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="email">Empscho:</label>
                    <input type='text' name='empscho' id='empscho' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="firstName">First name:</label>
                    <input type='text' name='firstName' id='firstName' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="gender">Gender:</label>
                    <input type='text' name='gender' id='gender' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                 <br></br>
                    <br></br>
                    <label htmlFor="email">JMBG:</label>
                    <input type='text' name='jmbg' id='jmbg' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="ocucupation">Occupation:</label>
                    <input type='text' name='ocucupation' id='ocucupation' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="email">Phone:</label>
                    <input type='email' name='phone' id='phone' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="state">State:</label>
                    <input type='text' name='state' id='state' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="surname">Surname:</label>
                    <input type='text' name='surname' id='surname' onChange={this.handleChange}/>
                 </div>
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="username">Username:</label>
                    <input type='text' name='username' id='username' onChange={this.handleChange}/>
                 </div>     
                 <div className='form-input-material'>
                    <br></br>
                    <br></br>
                    <label htmlFor="password">Password::</label>
                    <input type='password' name='password' id='password' onChange={this.handleChange}/>
                 </div>                          
                 <button type="submit" className="btn btn-ghost">Sign up</button>
            </form>
        </div>
     </div>
    );
   }
   
  }
  
  
