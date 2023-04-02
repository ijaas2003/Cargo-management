import './Adminlogin.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
const Adminlogin = () => {
const navigate = useNavigate();
const notifyA = (msg) => toast.error(msg)
const notifyB = (msg) => toast.success(msg)
const [UserName , setUserName] = useState("");
const [Password , setPassword] = useState("");
  const postData = ()=>{
    fetch("http://localhost:4000/adminlogin",{
  method:"post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    UserName:UserName,
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
      navigate("/admin")
    }      
})
  }
  return (
    <div>
    <div className="area" >
    <h1>Administator Login for cargo management</h1>
        <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div>
    <div className="box123">
        <div className="fo">
            <h2>Sign in</h2>
            <div className="inputbox123">
                <input type="text" id='UserName' name='UserName' value={UserName} onChange={((e) => {setUserName(e.target.value)})} required="required"/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputbox123">
                <input type="password" id='Password' name='Password' value={Password} onChange={((e) => {setPassword(e.target.value)})} required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <input type="submit" className='subm' onClick={() => postData()} required="required"/>
        </div>
    </div>
    </div>
  )
}

export default Adminlogin    