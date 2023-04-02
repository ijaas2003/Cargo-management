import './order.css'
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Orders = () => {
const [Show1,setShow1] = useState();
const [Show2,setShow2] = useState();
const [Show3,setShow3] = useState();

const changehandle = (Shown) =>{
  if(Shown === 'railway')
  {
    setShow1(true);
    setShow2(false)
    setShow3(false)
  }
  if(Shown === 'Plane'){
    setShow2(true)
    setShow3(false)
    setShow1(false)
  }
  
  if(Shown === 'Ship'){
    setShow3(true)
    setShow1(false)
    setShow2(false)
  }
}
  return (
      <div>
        <div className="Card-outline">
            <div className="first-heads">
               <h3> This are the Order is available and payment details</h3>
               <h5>If you want to see the Cost of Shipping <span>Click any one of the card to see there Cost per KG</span></h5>
               <div className='box-model'>
                  <div className='cards' onClick={() =>changehandle('railway')}>
                    <i class="fas fa-train"></i>
                    <div className='package'>
                      <p>starting price</p>
                      <h3>Cost : $100</h3>
                      <h3>Transport : Railway</h3>
                    </div>
                    <Link to="/Railway"><button className='see'>See More</button></Link>
                  </div>
                  <div className='cards'onClick={() =>changehandle('Plane')}>
                    <i class="fas fa-plane-departure"></i>                     
                    <div className='package'>
                      <p>starting price</p>
                      <h3>Cost : $300</h3>
                      <h3>Transport : Plane</h3>
                    </div>
                    <Link to="/Airway"><button className='see'>See More</button></Link>
                  </div>
                  <div className='cards' onClick={() =>changehandle('Ship')}>
                    <i class="fas fa-ship"></i>
                    <div className='package'>
                      <p>starting price</p>
                      <h3>Cost : $200</h3>
                      <h3>Transport : Ship</h3>
                    </div>
                    <Link to="/Ship"><button className='see'>See More</button></Link>
                  </div>
               </div>
            </div>
            
            <div className='taraffi actived-tab' id='Railway'>{
              Show1?
               <div className='tabling'>
                <h3>Railway</h3>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Weight(KG)</th>
                    <th scope='col'>Price(Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 to 10</td>
                    <td>100 to 10000</td>
                    
                  </tr>
                  <tr>
                    <td>10 to 20</td>
                    <td>10000 to 20000</td>
                    
                  </tr>
                  <tr>
                    <td>20 to 50</td>
                    <td>10000 to 50000</td>
                  </tr>
                  <tr>
                    <td>50 to 100</td>
                    <td>10000 to 100000</td>
                  </tr>
                  <tr>
                    <td>100 to 200</td>
                    <td>10000 to 200000</td>
                  </tr>
                  <tr>
                    <td>200 to 300</td>
                    <td>10000 to 200000</td>
                  </tr>
                </tbody>
              </table>
              </div>
              :null
              }
            </div>
            <div className='taraffi' id='Airway'>{
              Show2?<div className='tabling'>
                <h3>Airway</h3>
            <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Weight(KG)</th>
                    <th scope='col'>Price(Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 to 10</td>
                    <td>1000 to 100000</td>
                  </tr>
                  <tr>
                    <td>10 to 20</td>
                    <td>100000 to 200000</td>
                  </tr>
                  <tr>
                    <td>20 to 50</td>
                    <td>200000 to 500000</td>
                  </tr>
                  <tr>
                    <td>50 to 100</td>
                    <td>200000 to 1000000</td>
                  </tr>
                  <tr>
                    <td>100 to 200</td>
                    <td>1000000 to 2000000</td>
                  </tr>
                  <tr>
                    <td>200 to 300</td>
                    <td>2000000 to 3000000</td>
                  </tr>
                </tbody>
              </table>
              </div>:null
              }
            </div>
            <div className='taraffi' id='Ship'>{
              Show3?<div className='tabling'>
                <h3>Ship</h3>
            <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Weight(KG)</th>
                    <th scope='col'>Price(Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 to 10</td>
                    <td>100 to 10000</td>
                  </tr>
                  <tr>
                    <td>10 to 20</td>
                    <td>10000 to 20000</td>
                  </tr>
                  <tr>
                    <td>20 to 50</td>
                    <td>10000 to 50000</td>
                  </tr>
                  <tr>
                    <td>50 to 100</td>
                    <td>10000 to 100000</td>
                  </tr>
                  <tr>
                    <td>100 to 200</td>
                    <td>10000 to 200000</td>
                  </tr>
                  <tr>
                    <td>200 to 300</td>
                    <td>10000 to 200000</td>
                  </tr>
                </tbody>
              </table>
              </div>
              :null
              }
            </div>
            </div>
        </div>
  )
}

export default Orders;