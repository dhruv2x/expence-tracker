//This is where we create context
//context p-> pass data without passing props every level 
import React,{ createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
//Initial State

const initialState={
    transactions:[
        //Dumy transactions
        //if income   -> +ve
        //else exence -> -ve
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}

//Create context
//Here we pass default value initialState
export const GlobalContext=createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
  //Here state is thing that is going to be change
  //and dispatch is function   
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions functions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }


    return (
    <GlobalContext.Provider value=
    {{
      transactions:state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>);
  }