import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ transaction }) => {
  //Here we use sign for income and exxpenece
  //Based on amount +ve or -ve
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    //We need border to change its color based on income and expence
    //So use minus class

    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
