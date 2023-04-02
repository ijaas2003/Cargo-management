import './Payment.css';
import { useState } from 'react';
import  paypal  from './paypal.webp'
import PaypalCheckoutButton from './PaypalCheckoutButton';
const Payment = (props) => {

  const [railway, setRailway] = useState();
  const [airway, setAirway] = useState();
  const [ship, setShip] = useState();
  const handleChange = () => {
    if(props.Service === 'Railway'){
      setRailway(true);
      setAirway(false);
      setShip(false);
    }
    if(props.Service === 'Airways'){
      setRailway(false);
      setAirway(true);
      setShip(false);
    }
    if(props.Service === 'Ship'){
      setRailway(false);
      setAirway(false);
      setShip(true);
    }
  }
  

let date = new Date();
const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const Pay = () => {

    }
  return (
        <div id="Payment">
            <i className="fas fa-circle" id='circle'>
              <h3>Payment on only UPI!!!</h3>
            </i>
            <div className='pays'>
                <div className='detail'>
                <i class="fas fa-user" id='user'></i>
                 <h5> Recipt for</h5>
                  <p>{props.Name}</p>
                  <hr></hr>
                  <i class="fas fa-wallet" id='wallet'></i><h5>Amount</h5>
                  <p>RS:{props.KG}</p>
                  <p>note the above currency is on indian</p>
                  <hr></hr>
                  <span><i class="fas fa-calendar-week" id='week'></i>
                  <p>Date :</p>
                  </span>
                  <h5>{props.Dates}</h5>
                  <hr></hr>
                  <i class="fas fa-envelope" id='mail'></i>
                  <h5>Email:</h5>
                  <p>{props.Email}</p>
                  <hr></hr>
                  <i class="fas fa-location-arrow" id='location'></i>
                  <h5>Address:</h5>
                  <pre><p>{props.Text}</p></pre>
                  <hr></hr>
                </div>
                <div className='amount'>
                  <img src={paypal} className='payimg'></img>
                  <p className='timay'>Date :{`${day}-${month}-${year}`}</p>
                  <div className='lin'></div>
                  <hr className='hr'></hr>
                  <div className='cont'>
                    <h4>hello!! {props.Name}</h4>
                    <p> {props.NickName} you need to pay a amount of RS:{props.KG} for the Service you applied for.(<a href='https://www.paypal.com'>www.paypal.com</a>)</p>
                    <h5>Thank you for choosing us</h5>
                  </div>
                  <hr></hr>
                 <div className='paypal-button-container'>
                    <PaypalCheckoutButton Name={props.Name} Email={props.Email} Description={"This is a product can be hold by data"} Price = {props.KG*0.011}/>
                 </div>
                </div>
            </div>
        </div>
  )
}
export default Payment;