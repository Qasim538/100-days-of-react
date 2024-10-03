import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpanses from './Components/IncomeExpanses'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'



const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpanses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  )
}

export default App
