import React from 'react'
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction.js';
import { GlobalProvider } from './context/GlobalState.js';
import  './App.css';

function App() {
  return (
    <GlobalProvider>
      {/*Below contains main header of our web app*/}
      <Header/>

      {/*Now we have to create container for 'Balance' */}
      {/*snippet -> .container*/}
        <div className="container">
          <Balance/>
        </div>

      {/*Income-expence Box/Display */}
      <IncomeExpenses/>

      {/*Now Here create History Component */} 
      <TransactionList/> 
      
      {/*Create add Transaction components */}
      <AddTransaction/>
    </GlobalProvider>
    );
}

export default App;