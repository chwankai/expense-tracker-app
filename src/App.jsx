// The root of the system

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import './App.css';
import './index.css';
import Header from './components/Header';

function App() {
  // --- Function to add new 
  const [transaction, setTransactions] = useState([
    // Default list here
    {id: 1001, date:'04/10 09:25PM', type:'Income', category:'Salary', amount:200.00, desc:'Jan Salary'},
    {id: 1002, date:'04/11 01:45AM', type:'Expense', category:'Lunch', amount:300.00, desc:'KFC'},
    {id: 1003, date:'04/12 05:48PM', type:'Expense', category:'Bill', amount:100.00, desc:'Unifi'},
  ]);

  const [newBalance, setNewBalance] = useState(0);
  const [newIncome, setNewIncome] = useState(0);
  const [newExpense, setNewExpense] = useState(0);

  const [newType, setNewType] = useState('Income');
  const [newCategory, setNewCategory] = useState('Food');
  const [newAmount, setNewAmount] = useState(0.00);
  const [newDesc, setNewDesc] = useState('');
  const enterNewTrns = (e) => {
    setTransactions([
      ...transaction,
      {
        id: uuidv4(), // random UUID
        date: dayjs(new Date()).format('MM/DD hh:mmA'), //A = AM/PM, a = am/pm
        type: newType,
        category: newCategory,
        amount: newAmount,
        desc: newDesc
      },
    ])

    if(newType == 'Income'){
      setNewIncome(newIncome + newAmount);
      setNewBalance(newBalance + newAmount);
    }
    else if(newType == 'Expense'){
      setNewExpense(newExpense + newAmount);
      setNewBalance(newBalance - newAmount);
    }

    // Clear the input value
    setNewType('Income');
    setNewCategory('');
    setNewAmount(0.00);
    setNewDesc('');
  }

  const isCK = true;

  

  function calTotal(test_amount){
    if(test_amount < 50){
      return <span>You are saving money!</span>
    }
    else if(test_amount < 300){
      return <span>Please control your budget!</span>
    }
    else{
      return <span>Stop spending!</span>
    }
  }


  const clickHandler = (e) => {
    console.log("Button work in progress!", e);
    window.alert("Button work in progress!");
  }
  const displayName = (name, e) => {
    alert("Button clicked by "+ name, e)
  }

  function SubmitButton(){
    return <button>click me</button>
  }

  return (
    <>
    <div>
      <Header isCK={isCK} />
      
      <div className="container">
        <div id='containerLeft'>
          <div className='widget'>
            <h2>Balance</h2>
            <p>RM {newBalance}</p>
          </div>
          <div id="containerLeftR2">
            <div className='widget' id='incomeWidget' style={{color:'green'}}>
              <h2>Income</h2>
              <p>RM {newIncome}</p>
            </div>
            <div className='widget' id='expenseWidget' style={{color:'red'}}>
              <h2>Expense</h2>
              <p>RM {newExpense}</p>
            </div>
          </div>
        </div>
        
        <div id='containerRight'>
          <div className="widget" id='transactionWidget'>
            <h2>Recent Transaction</h2>
            <table style={{border:'2px black solid'}}>
              <thead>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
              </thead>
              {/* loop the transaction list */}
              {/* must have unique key for each row */}
              {transaction.map(item =>
              <tbody key={item.id} className={item.type}>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{item.desc}</td>
              </tbody>)}
            </table>
          </div>
        </div>
      </div>

      <label htmlFor="">Select type: </label>
      <select name="type" id="type" value={newType} onChange={(e) => setNewType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <br />
      <label htmlFor="">Select category: </label>
      <select name="category" id="category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Bill">Bill</option>
        <option value="Income">Salary</option>
      </select>
      <br />
      <label htmlFor="">Enter amount: </label>
      <input type="number" value={newAmount} onChange={(e) => setNewAmount(Number(e.target.value))} required />
      <br />
      <label htmlFor="">Description: </label>
      <input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)}/>
      <br />
      <button type="button" onClick={enterNewTrns}>Add new records</button>
      
      
      <hr />
      <h2>Testing Farm </h2>
      <hr />
      {/* call function and pass parameter */}
      <span>Reminder: </span>{calTotal(700)}
      <br />
      <button onClick={clickHandler}>Add New Records</button>
      {/* If want pass value must use arrow function here */}
      <button onClick={(e) => displayName('CK', e)}>Press to show name</button>
      <SubmitButton></SubmitButton>
      

      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>
      <div>kdnioqdn</div>

    </div>
    </>
  )
}

export default App
