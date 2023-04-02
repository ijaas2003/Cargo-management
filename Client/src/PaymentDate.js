
const PaymentDate = ({Formdata}) => {
    const mystyle = {
        margin: "0px 0px 0px 30px",
      };
    const handleChanges = () => {
      console.log(Formdata);
    }
    
  return (
    <>
        <button onClick={() => handleChanges()} className='btn btn-success' style={mystyle}>Next</button>
    </>
  )  
}

export default PaymentDate