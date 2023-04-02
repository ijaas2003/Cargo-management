import axios from 'axios';
import { useEffect, useState } from 'react';
import './Admin.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Shipdata = () => {
    const [posts,setposts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/ships')
        .then(res =>{
            console.log(res.data)
            setposts(res.data)
        }).catch(err =>{
            console.log(err)
        })
    },[])
  return (
    <div className='Cont'>
        <div className='Nav'>
            <h4>Customer Services</h4>
        </div>
        <div className='text'>
            <h4>Here is the data of Customer who will Registered for the Service Ship</h4>
        </div>
        <div className='datas'>
          <h4>Order details</h4>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">NickName</th>
      <th scope="col">Phone</th>
      <th scope='col'>Email</th>
      <th scope='col'>Destination</th>
      <th scope='col'>Service</th>
      <th scope='col'>Action</th>
      
    </tr>
  </thead>
  <tbody>
    {
      posts && posts.length > 0
      ?
      posts.map((post) =>{
        return(
          <tr>
            <td>
              {post.Name}
            </td>
            <td>
              {post.NickName}
            </td>
            <td>
              {post.Phone}
            </td>
            <td>
              {post.Email}
            </td>
            <td>
              {post.Destination}
            </td>
            <td>
              {post.Service}
            </td>
            <td>
              <button className="btn btn-primary" key={post.id} onClick={() =>alert("Successfully Approved")}>Approve</button>
            </td>
          </tr>
        )
      })
      :"No data is there"
    }
  </tbody>
</table>    
<div className='link'>
  <Link to='/AirwayData' className='path'>Airways</Link>
  <Link to='/ShipData' className='path'>Ship</Link>
  <Link to='/admin' className='path'>Railways</Link>
</div>
        </div>
    </div>
  )
}

export default Shipdata