import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'



const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmout] = useState(0)

    const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault()

  const newTransaction = {
    id: Math.floor(Math.random() * 1000000),
    text,
    amount: +amount
  }
  addTransaction(newTransaction)

}


  return (
    <div>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input value={amount} onChange={(e)=> setAmout(e.target.value)}  type="number" placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
    </div>
  )
}

export default AddTransaction
