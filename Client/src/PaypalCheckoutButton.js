import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {toast} from 'react-toastify'

const PaypalCheckoutButton = (props) => {
    const Success = (msg) => toast.success(msg)
    const Error = (msg) => toast.error(msg)
    const [Paidfor , setPaidfor] = useState(false)
    const [Errorfor , setError] = useState(null)
    const [{ options }, dispatch] = usePayPalScriptReducer();
const [currency, setCurrency] = useState(options.currency);
    const handleapprove= (orderID) => {
        setPaidfor(true);
    }
    if(Paidfor){
        Success('thank you for you service request😍 We will contact you soon');
        setPaidfor(false)
    }
    if(Errorfor){
        Error(Errorfor)
    }
    function onCurrencyChange({ target: { value } }) {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }
    const Price = props.Price;
    let Prices = Math.trunc(Price)
    return(
        <>
        <select value={currency} onChange={onCurrencyChange}>
            <option value="USD">United States dollar</option>
            <option value="EUR">Euro</option>
        </select>
        <PayPalButtons 
        onClick={(data , actions) => {
            const hasAlreadyBought = false;
            if(hasAlreadyBought){
                setError("you already buyed")
                return actions.reject();
            }
            else{
                return actions.resolve();
            }
        }}
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: props.Email,
                        amount: {
                            value: Prices,
                        },
                    },
                ],
            });
        }}
        
        onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                Success(`Transaction completed by ${name}👍🔥`)
                handleapprove(true)
            });
        }}
        onError={(err) => {
            setError(err)
        }}
        />
        </>
    )
}
export default PaypalCheckoutButton;