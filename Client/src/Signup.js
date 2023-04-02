import { Link , useNavigate} from "react-router-dom"
import { useState } from "react";
import {toast} from 'react-toastify'
const Signup = () => {
  const navigate = useNavigate();
const notifyA = (msg) => toast.error(msg)
const notifyB = (msg) => toast.success(msg)
    const [Name , setName] = useState("");
    const [Email , setEmail] = useState("");
    const [Password , setPassword] = useState("");
    const postData = ()=>{
      fetch("http://localhost:4000/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      Name:Name,
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
        navigate("/Login")
      }      
  })
}
  return (
    <div className="container" id="signup">
          <div className="login">
            <div className="form">
            <h1>Signup</h1>
            <div className="input">
                <label>Name</label>
                <input type="text" id="Name" name="Name" value={Name} onChange={((e) => {setName(e.target.value)})}  placeholder="Enter ther name"/>
              </div>
              <div className="input">
                <label>Email</label>
                <input type="email" className='one' id="Email" name="Email" value={Email} onChange={((e) => {setEmail(e.target.value)})}   placeholder="Enter ther Email"/>
              </div>
              <div className="input">
                <label>Password</label>
                <input type="password" name="Password" id="Password" placeholder="Enter the password" value={Password} onChange={((e) => {setPassword(e.target.value)})}/>
              </div>
              <input type="submit" className='sub' value="Sign Up" onClick={() => postData()}/>
                <p>you already have an account<Link to="/Login"><span>Login</span></Link></p>
            </div>
          </div>
      </div>
  )
}
export default Signup