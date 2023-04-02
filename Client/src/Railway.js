import './Airway.css'
import { useState , useMemo} from 'react';
import 'bootstrap'
import {toast} from 'react-toastify'
import countryList from 'react-select-country-list'
import Select  from 'react-select';
import Payment from './Payment';
const notifyA = (msg) => toast.error(msg);
const notifyB = (msg) => toast.success(msg);
const Railway = () => {
  const [value, setValue] = useState()
  const iniitialvalue = { Name:"", NickName:"", Phone:"", Email:"", Dates:"" , KG:"", Text:"" };
const [formvalues ,setformvalues] = useState(iniitialvalue);
 const options = useMemo(() => countryList().getData(), [])
const changeHandler = value => {
  setValue(value)
}
  const handleChange = (e) => {
    const {name , value} = e.target;
    setformvalues({...formvalues, [name]: value });
    console.log(formvalues);
  }
  /*const Payments = (Service) => {
    alert(Service);
    fetch("http://localhost:4000/PaymentDatas",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Service:Service,
      })
    }).then((res) =>{
      res.json()
    }).then((data) => {
      console.log(data);
      if(data.error){
          console.log(data.error);
      }
    });
  }*/
  const postData = ()=>{
    fetch("http://localhost:4000/railways",{
  method:"post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    Name:formvalues.Name,
    NickName: formvalues.NickName,
    Phone: formvalues.Phone,
    Email: formvalues.Email,
    Destination : value,
    Dates:formvalues.Dates,
    Text:formvalues.Text,
    KG:formvalues.KG,
  })
}).then(res => res.json(
))
  .then(data => {
    if(data.error){
      console.log(data.error)
      notifyA(data.error)
    }
    else{
      console.log(data)
      notifyB(data.message)
    }      
})
  }
    return (
      <div className="Form" style={{backgroundImage:'url(cargo-train-6.jpg)'}} >
          <div className="box1234">
            <h1>Railway</h1> 
              <div className="put">
                <input type="text" className='form-control' name='Name' value={formvalues.Name} placeholder="Enter your Fullname" onChange={handleChange}  required="Required"/>
              </div>
              <div className="put">
                <input type="text" className='form-control' name="NickName" value={formvalues.NickName} placeholder="Enter your Nick Name" onChange={handleChange}  required="Required"/>
              </div>
              <div className="put">
                <input type="text" name="Phone" className='form-control' value={formvalues.Phone} onChange={handleChange} placeholder="Enter your Phone Number"  required="Required"/>
              </div>
              <div className="put">
                <input type="email" name='Email' className='form-control' value={formvalues.Email} onChange={handleChange} placeholder="Email Address"  required="Required" pattern=''/>
              </div>
              <div className="put">
                <Select options={options} className='sel' name="Destination" value={value} onChange={changeHandler} />
              </div>
              <div className="put">
                <input type="date" name='Dates' className='form-control' value={formvalues.Dates} onChange={handleChange} required="Required"/>
              </div>
              <div className="put">
                <input type="text" name='KG' className='form-control' value={formvalues.KG} onChange={handleChange} required="Required" placeholder='Enter the KG(Weight)'/>
              </div>
              <div className="put">
                <textarea cols={40} rows={3} name="Text" value={formvalues.Text}  onChange={handleChange} className="addr" placeholder="Enter your address to ship"></textarea>
              </div>
             <input className='btn btn-primary' value="Save" type="submit" onClick={() => postData()} />
            <Payment Name={formvalues.Name} NickName={formvalues.NickName} Email={formvalues.Email} Dates={formvalues.Dates} KG={formvalues.KG*100} Text={formvalues.Text} Service={'Railway'}/>
          </div>
      </div>
    )
  }
  export default Railway;