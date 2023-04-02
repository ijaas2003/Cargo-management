import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar(){
  return (
    <div className="navbar">
        <ul className="ul">
            <Link to="./login"><li>Login</li></Link>
            <Link to="./Signup"><li>Signup</li></Link>
            <Link to='./adminlogin'><li>Admin</li></Link>
        </ul>
    </div>
  )
}