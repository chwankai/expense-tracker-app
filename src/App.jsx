// The root of the system

import { createContext, useContext, useState } from 'react'
import './App.css'
import './index.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import NavBar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

// ---------- below is test function ----------

function Son ({onGetmsg}){
  const msg = "This is son message"
  return (
    <button onClick={() => {onGetmsg(msg)}}>sendMsg</button>
  )
}

function Son2 ({msg}){
  return (
    <div>This is Son2: {msg}</div>
  )
}

const MsgContent = createContext()

function Son3(){
  return(
    <Son4 />
  )
}

function Son4(){
  const msg = useContext(MsgContent)
  return(
    <p>This is content from top: {msg}</p>
  )
}

// ---------- above is test function ----------

// Main function
function App() {
  
  const isCK = true

  // BELOW IS FOR TESTING ONLY
  
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

  const [msg, setMsg] = useState('')

  const getmsg = (msg) => {
      setMsg(msg)
    }


  // ABOVE IS FOR TESTING ONLY

  return (
    <>
      <Dashboard>
        <Header isCK={isCK} />
        <NavBar />
        <MainContent />
        <Footer />
      </Dashboard>
    
      <div className="testing">
        {/* Passing dad function to son */}
        <Son onGetmsg={getmsg}></Son>
        {/* Retrieve value from son to display in dad */}
        <Son2 msg={msg}></Son2>

        <MsgContent.Provider value={msg}>
          <Son3 />
        </MsgContent.Provider>

        
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
        
      </div>  
      */}
                  
    
    </>
  )
}

export default App
