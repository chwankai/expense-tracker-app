// The root of the system

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount(count+1)
  }

  const isCK = true

  function header(){
    return 'Expense Tracker'
  }
  
  function calTotal(amount){
    if(amount < 50){
      return <span>You are saving money!</span>
    }
    else if(amount < 300){
      return <span>Please control your budget!</span>
    }
    else{
      return <span>Stop spending!</span>
    }
  }

  const transaction = [
    {id: 1001, trns:'RM 200.00'},
    {id: 1002, trns:'RM 100.00'},
    {id: 1003, trns:'RM 300.00'},
  ]

  const clickHandler = (e) => {
    console.log("Button work in progress!", e)
  }
  const displayName = (name, e) => {
    console.log("Button clicked by ", name, e)
  }

  function SubmitButton(){
    return <button>click me</button>
  }

  return (
    <>
    <div>
      {/* if isCK is true display CK else display Guest */}
      <h1 id="header">{isCK ? "CK's " : "Guest's "}{header()}</h1>
      {/* secret message for CK only */}
      {/* && -> if want true only */}
      {isCK && <h2>Welcome back</h2>}
      <div className='container' style={{color:'red'}}>
        <h2>Balance</h2>
        <p>RM 100.00</p>
      </div>
      <div className='container'>
        <h2>Income</h2>
        <p>RM 300.00</p>
      </div>
      <div className='container'>
        <h2>Expense</h2>
        <p>RM 200.00</p>
      </div>
      <div className="container">
        <h2>Transaction</h2>
        <ul>
          {/* loop the transaction list */}
          {/* must have unique key for each row */}
          {transaction.map(item =><li key ={item.id}>{item.trns}</li>)}
        </ul>
      </div>
      <hr />
      <h2>Testing Farm </h2>
      <hr />
      {/* call function and pass parameter */}
      <span>Reminder: </span>{calTotal(700)}
      <br />
      <button onClick={clickHandler}>Add New Records</button>
      {/* If want pass value must use arrow function here */}
      <button onClick={(e) => displayName('CK', e)}>Press to show name</button>
      
      {/* auto update count */}
      <button onClick={updateCount}>{count}</button>
    </div>
    </>
  )
}

export default App
