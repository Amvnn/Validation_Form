import React from 'react'
import {useState } from 'react';
import './App.css'


function App() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');

  const validateEmail = (value:string)=>{
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!value) return "Email is required";
    if(!regex.test(value)) return "Invalid email format";
    return "";
  }

  const validatePassword = (value: string)=>{
    if(!value) return 'Password is required';
    if(value.length < 6)return 'Password must be at least 6 characters';
    return '';
    }

    const handleEmailChange = (email: React.ChangeEvent<HTMLInputElement>)=>{
      const value = email.target.value;
      setEmail(value);
      setEmailError(validateEmail(value));
    }

    const handlePasswordChange = (e:  React.ChangeEvent<HTMLInputElement>)=>{
      const value = e.target.value;
      setPassword(value);
      setPasswordError(validatePassword(value));
    }

  const handleSubmit=(e: React.FormEvent)=>{
    e.preventDefault();

    const emailErr =  validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if(!emailErr && !passwordErr){
      console.log('Form submitted:',{email,password});
      alert('Login successful!');
    }
  };

  return (
    <div className='app'>
    <h1>Login Form</h1>

    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Email : </label>
      <input 
      type="email"
      value={email}
      onChange={handleEmailChange}
       />
       {emailError && <p className="error">{emailError}</p>}
    </div>

    <div className='form-group'>
      <label> Password : </label>
      <input 
      type="password"
      value={password}
      onChange={handlePasswordChange}
       />
       {passwordError && <p className="error">{passwordError}</p>}
    </div>
    <button type='submit' disabled={!!emailError || !!passwordError}>
      Login
      </button>
    </form>
    </div>
  )
}

export default App
