import React from "react";


  
export class SignUp extends React.Component{
  handleChange = (event : any) => {}
  handleSubmit = (event : any) => {}
  render() {
     return (
       <div className='wrapper'>
         <div className='form-wrapper'>
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit} noValidate >
               <div className='adress'>
                  <label htmlFor="adress">Adress:</label>
                  <input type='text' name='adress' onChange={this.handleChange}/>
               </div>
               <div className='city'>
                  <label htmlFor="city">City:</label>
                  <input type='text' name='city' onChange={this.handleChange}/>
               </div>
                           
               <div className='email'>
                  <label htmlFor="email">Email:</label>
                  <input type='email' name='email' onChange={this.handleChange}/>
               </div> 
               <div className='empscho'>
                  <label htmlFor="email">Empscho:</label>
                  <input type='text' name='empscho' onChange={this.handleChange}/>
               </div>
               <div className='firstName'>
                  <label htmlFor="firstName">First name:</label>
                  <input type='text' name='firstName' onChange={this.handleChange}/>
               </div>
               <div className='gender'>
                  <label htmlFor="gender">Gender:</label>
                  <input type='text' name='gender' onChange={this.handleChange}/>
               </div>
               <div className='jmbg'>
                  <label htmlFor="email">JMBG:</label>
                  <input type='text' name='jmbg' onChange={this.handleChange}/>
               </div>
               <div className='ocucupation'>
                  <label htmlFor="ocucupation">Occupation:</label>
                  <input type='text' name='ocucupation' onChange={this.handleChange}/>
               </div>
               <div className='email'>
                  <label htmlFor="email">Phone:</label>
                  <input type='email' name='email' onChange={this.handleChange}/>
               </div>
               <div className='state'>
                  <label htmlFor="state">State:</label>
                  <input type='text' name='state' onChange={this.handleChange}/>
               </div>
               <div className='surname'>
                  <label htmlFor="surname">Surname:</label>
                  <input type='text' name='surname' onChange={this.handleChange}/>
               </div>
               <div className='username'>
                  <label htmlFor="username">Username:</label>
                  <input type='text' name='username' onChange={this.handleChange}/>
               </div>                              
               <div className='submit'>
                  <button>Register Me</button>
               </div>
          </form>
      </div>
   </div>
  );
 }
}