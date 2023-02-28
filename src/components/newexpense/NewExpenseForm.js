import './NewExpenseForm.css'
import './NewExpense.css'
import { useState } from 'react'
const NewExpenseForm =()=>{
   const[title,settitle] =useState('')
   
    const titlehandle =(event)=>{
        settitle(event.target.value)
    }
    const[amount,setamount] =useState('')
   
    const amounthandle =(event)=>{
        setamount(event.target.value)
    }
    const[dat,setdat] =useState('')
   
    const datehandle =(event)=>{
        setdat(event.target.value)
    }
const submithandle=(event)=>{
    event.preventDefault()

    const expenseobj ={title : title, amount :amount,
    dat : new Date(dat) }
    console.log(expenseobj);
}
    
    return (
    <form onSubmit={submithandle}>
         <div className="new-expense__controls"></div>
    <div className="new-expense__control"></div>
    <label>title</label>
    <input type = "text" onChange={titlehandle} />
    <div className="new-expense__control"></div>
    <label>amount</label>
    <input type = 'number' onChange={amounthandle} />
    <div className="new-expense__control"></div>
    <label>date</label>
    <input type = 'date' min = " 2015-1-1"  max = "2018-1-1" onChange={datehandle}/>
  
    <div className="new-expense__actions"></div>
    <button type ='submit'> submit</button>
    
</form>
)
}
export default NewExpenseForm