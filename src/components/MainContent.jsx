import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

import MainContentTop from './MainContentTop'
import MainContentTransaction from './MainContentTransaction'
import MainContentHistory from './MainContentHistory'
import MainContentGraph from './MainContentGraph'
import MainContentNewTransactions from './MainContentNewTransctions'

function MainContent(){
    const [transaction, setTransactions] = useState([])
    // Default list
    //{id: 1001, date:'04/10 09:25PM', type:'Income', category:'Salary', amount:200.00, desc:'Jan Salary'},
    //{id: 1002, date:'04/11 01:45AM', type:'Expense', category:'Lunch', amount:300.00, desc:'KFC'},
    //{id: 1003, date:'04/12 05:48PM', type:'Expense', category:'Bill', amount:100.00, desc:'Unifi'},
  
    const totalIncome = transaction
        // filter row where type = income
        .filter(item => item.type === "Income")
        // use reduce to loop through the amount and return sum
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = transaction
        .filter(item => item.type === "Expense")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalBalance = totalIncome - totalExpense;

    const [newType, setNewType] = useState('Income')
    const [newCategory, setNewCategory] = useState('Food')
    const [newAmount, setNewAmount] = useState('')
    const [newDesc, setNewDesc] = useState('')
    
    const enterNewTrns = () => {
        if (isNaN(newAmount) || newAmount <= 0) {
            alert("Invalid amount");
            return;
        }

        setTransactions([
            ...transaction,
            {
            id: uuidv4(),
            date: dayjs().format('MM/DD hh:mmA'),
            type: newType,
            category: newCategory,
            amount: Number(newAmount),
            desc: newDesc
            }
        ]);

            setNewType('Income');
            setNewCategory('Food');
            setNewAmount('');
            setNewDesc('');
    }

    const deleteTrns = (id) => {
        setTransactions(
            transaction.filter(item => item.id !== id)
        );
    }

    function handleSubmit(e){
        e.preventDefault(); //to prevent page from refreshing
    }

    return(
        <div className="content">
            <MainContentTop newBalance={totalBalance} />
            <MainContentTransaction
            newIncome={totalIncome}
            newExpense={totalExpense}
            />
            <MainContentHistory transaction={transaction} deleteTrns={deleteTrns}/>
            <MainContentGraph />
            <MainContentNewTransactions
                handleSubmit={handleSubmit}
                enterNewTrns={enterNewTrns}
                newType={newType}
                setNewType={setNewType}
                newCategory={newCategory}
                setNewCategory={setNewCategory}
                newAmount={newAmount}
                setNewAmount={setNewAmount}
                newDesc={newDesc}
                setNewDesc={setNewDesc}
            />
        </div>
    );
}

export default MainContent