import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    const auth=localStorage.getItem('users')
    if(auth){
        navigate('/')
    }
  })
  const handleLogin=async()=>{
    console.warn("email,password",email,password)
    let result=await fetch('http://localhost:3000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":'application/json'
        }
    });
    result=await result.json();
    console.warn(result)
    if(result.name){
        localStorage.setItem('users',JSON.stringify(result))
        navigate('/')
    }else{
        alert("Please enter correct details")
    }
}
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type='text' className="inputBox" placeholder='Enter Email'
        onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type='password' className="inputBox" placeholder='Enter Password'
         onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button onClick={handleLogin} className='loginButton' type='button'>Login</button>
    </div>
  )
}

export default Login;
