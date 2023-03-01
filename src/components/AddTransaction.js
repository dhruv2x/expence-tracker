//snippet -> rafc

import React, { useState,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  //Now create state using hooks
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction}=useContext(GlobalContext);

  const onSubmit=e=>{
    //The preventDefault() method cancels the event if it is cancelable
    e.preventDefault();

    const newTransaction={
      //As we have to pass random id for sperating each transaction 
      id:Math.floor(Math.random() * 100000000),
      text,
      amount:+amount  //To convert string to int
    }
    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      {/*Now we have to create form for income and expence submission */}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={text}//We store value of this submission in text
            onChange={(e) => setText(e.target.value)}   //and pass to state
            placeholder="Enter Title Here..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (For Income : Positive, For Expense : Negative)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Transaction Amount Here..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
