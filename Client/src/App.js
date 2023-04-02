import './App.css';
import Header from './header';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Signup from './Signup';
import Airway from './Airway';
import Railway from './Railway';
import Ship from './Ship';
import Admin from './Admin';
import Orders from './orders';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AirwaysData from './AirwaysData';
import ShipData from './Shipdata';
import Adminlogin from './Adminlogin';
import Payment from './Payment';
import PaymentDate from './PaymentDate';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
  const initialOptions = {
    "client-id": "AUU8HVCwiDSmugwqM8e9rcitf8lORNe_xvZ_uHGPoCSIie4Uyo8wJaKMLmrg4w3mYa7UiJjjBfFoRxyP",
    intent: "capture",
};
  return (
    <PayPalScriptProvider options={initialOptions}>
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/adminlogin' element={<Adminlogin />}></Route>
        </Routes>
        <Routes>
          <Route path='/airway' element={<Airway />}></Route>
          <Route path='/railway' element={<Railway />}></Route>
          <Route path='/ship' element={<Ship />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/order' element={<Orders/>}></Route>
          <Route path='/AirwayData' element={<AirwaysData />}></Route>
          <Route path='/ShipData' element={<ShipData />}></Route>
          <Route path='/Payment' element={<Payment />}></Route>
          <Route path='/PaymentDate' element={<PaymentDate/>}></Route>
        </Routes>
        <ToastContainer theme="dark"/>
    </div>
    </BrowserRouter>
    </PayPalScriptProvider>
  );
}
export default App;
