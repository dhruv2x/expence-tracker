import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
  //As we need context to show total
  const {transactions}=useContext(GlobalContext);

  //For total we use reducer functin to sum all amounts
  const amounts = transactions.map(transaction => transaction.amount);
  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>  {/*that's a fragment*/}
      <h4>Your Balance</h4>

      <h1>₹{total}</h1>
    </>
  )
}

export default Balance
