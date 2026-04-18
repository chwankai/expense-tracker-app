// The root of the system

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import './App.css'
import './index.css'
import Header from './components/Header'

function App() {
  // --- Function to add new 
  const [transaction, setTransactions] = useState([
    // Default list here
    {id: 1001, date:'04/10 09:25PM', type:'Income', category:'Salary', amount:200.00, desc:'Jan Salary'},
    {id: 1002, date:'04/11 01:45AM', type:'Expense', category:'Lunch', amount:300.00, desc:'KFC'},
    {id: 1003, date:'04/12 05:48PM', type:'Expense', category:'Bill', amount:100.00, desc:'Unifi'},
  ])

  const [newBalance, setNewBalance] = useState(0.00)
  const [newIncome, setNewIncome] = useState(0.00)
  const [newExpense, setNewExpense] = useState(0.00)

  const [newType, setNewType] = useState('Income')
  const [newCategory, setNewCategory] = useState('Food')
  const [newAmount, setNewAmount] = useState('')
  const [newDesc, setNewDesc] = useState('')
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
      setNewIncome(Number(newIncome) + Number(newAmount))
      setNewBalance(Number(newBalance) + Number(newAmount))
    }
    else if(newType == 'Expense'){
      setNewExpense(Number(newExpense) + Number(newAmount))
      setNewBalance(Number(newBalance) - Number(newAmount))
    }

    // Clear the input value
    setNewType('Income')
    setNewCategory('')
    setNewAmount('')
    setNewDesc('')
  }

  const isCK = true
  

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
    console.log("Button work in progress!", e)
    window.alert("Button work in progress!")
  }
  const displayName = (name, e) => {
    alert("Button clicked by "+ name, e)
  }

  function SubmitButton(){
    return <button>click me</button>
  }

  function NavBar(){
    return <ul className='nav'>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Transaction</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  }

  return (
    <>
    <div className='wholeContainer'>
      <div className="header"><Header isCK={isCK} /></div>
      <div className="nav"><NavBar /></div>
      <div className="content">
        <div className="title"><h2>Dashboard</h2></div>
        <div className="search">
          <input class='searchField' type="text" placeholder='Search Bar' />
          <button><img width="15px" src="./src/assets/search-button.svg" alt="search button" /></button>
          </div>
        <div className="balance">
          <p className="balanceAmount">RM {newBalance.toFixed(2)}</p>
          <p className="balanceDesc">Total balance from all account</p>
        </div>
        <div className="addButton"><button>Add a new record</button></div>
        <div className="trns income">
          <p className="trnsTitle">Income</p>
          <p className="trnsAmount">RM {newIncome.toFixed(2)}</p>
        </div>
        <div className="trns expense">
          <p className="trnsTitle">Expense</p>
          <p className="trnsAmount">RM {newExpense.toFixed(2)}</p>
        </div>
        <div className="history">
            <h2>Recent Transaction</h2>
            <table>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
              {/* loop the transaction list */}
              {/* must have unique key for each row */}
              {transaction.map(item =>
              <tr key={item.id} className={item.type}>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.category}</td>
                <td>{item.amount.toFixed(2)}</td>
                <td>{item.desc}</td>
              </tr>)}
            </table>
        </div>
        <div className="graph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, recusandae quaerat a minus sunt dolorum doloremque, consequatur hic neque incidunt ex qui repellat cupiditate dolore ipsa assumenda laboriosam eius fugit culpa? Accusantium, excepturi? Officiis iste quis aspernatur tenetur dolor saepe animi corrupti fuga ipsam at cum incidunt soluta nihil beatae veniam rem eum tempore itaque laboriosam, sed molestias blanditiis vitae? Ut quae libero repudiandae deserunt perferendis eius illum recusandae earum voluptate! Aut repudiandae reprehenderit aliquam consequatur nemo perspiciatis rerum aliquid perferendis modi, distinctio debitis nihil quo error recusandae neque numquam, adipisci unde illum tempore? Odio dolore ullam sequi perferendis labore?</p>
        </div>
        <div className="addNewTrns">
          <h2>Add new record</h2>
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
        <input type="number" step="0.01" min="0" placeholder="Enter amount" value={newAmount} onChange={(e) => setNewAmount(Number(e.target.value))} required />
        <br />
        <label htmlFor="">Description: </label>
        <input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)}/>
        <br />
        <button type="button" onClick={enterNewTrns}>Add new records</button>
        </div>
      </div>
      <div className="footer"><footer>2026 © CK - ALL RIGHTS RESERVED.</footer></div>
      
    </div>
    {/*  
      
        <hr />
        <h2>Testing Farm </h2>
        <hr />
        {/* call function and pass parameter 
        <span>Reminder: </span>{calTotal(700)}
        <br />
        <button onClick={clickHandler}>Add New Records</button>
        {/* If want pass value must use arrow function here 
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
      */}
                  
    
    </>
  )
}

export default App
