import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate()
const notifyA = (msg) => toast.error(msg)
const notifyB = (msg) => toast.success(msg)
const [Email , setEmail] = useState("");
const [Password , setPassword] = useState("");
/*const googleAuth = () => {
  window.open(
    `${process.env.REACT_APP_API_URL}/router/google/callback`,
    "_self",
  )
}*/
/*var EmailError = document.getElementById("EmailError");
var PassError = document.getElementById("PassError");
var validateEmail = () => {
  const FullEmail = document.getElementById('Email').value
  if(FullEmail.length===0){
    EmailError.innerHTML = "Enter your Email";
    return false;
  }
  if(!FullEmail.match(/^[A-Za-z]*[0-9]*[@][A-Za-z]*[\.][A-Za-z]*$/)){
    EmailError.innerHTML = "Enter proper Email";
    return false;
  }
  return true;
}
var validatePassword = () => {
  const Password = document.getElementById('Password').value;
  if(Password.length===0){
    PassError.innerHTML = "Enter your password";
    return false;
  }
  if(!PassError.match(/^[A-Za-z]*[0-9]/))
  {
    PassError.innerHTML = "Enter password with character and number";
    return false;
  }
  return true;
}*/
const postData=()=>{
  
  fetch("http://localhost:4000/login",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      Email:Email,
      Password:Password,
    })
  }).then(res => res.json())
    .then(data => {
      if(data.error){
        console.log(data.error)
        notifyA(data.error)
        
      }
      else{
        console.log(data)
        notifyB(data.message)
        navigate("/header")
      }      
  })

}
    return (
        <div className="container" id='login'>
          <div className="login">
            <div className='form'>
            <h1>Login</h1>
              <div className="input">
                <label>Email</label>
                <input type="email" className='one' id="Email" name="Email" value={Email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter ther Email" required=""/>
                <span id='EmailError'></span>
              </div>
              <div className="input">
                <label>Password</label>
                <input type="password" name="Password" id="Password" placeholder="Enter the password" value={Password} onChange={(e) => {setPassword(e.target.value)}} required=""/>
                <span id='PassError'></span>
              </div>
              <input type="submit" className='sub'onClick={()=>{postData()}}/>
                <p>you don't have account<Link to="/signup"><span>Signup</span></Link></p>
              </div>
          </div>
        </div>
    )
  }
export default Login;