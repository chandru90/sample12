
import React, { useState } from 'react';

function ExpenseItem(props) {

  const [amount,setamount] =useState(props.amount)
  const [count,setcount]=useState(0)
  const deletehandler=()=>{
    setamount(100*count)
    setcount(count+1)
  }

  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h6>rs{amount}</h6>
        <div className='expense-item__price'>Rs{amount}</div>
      </div>
      <button onClick={deletehandler}>Delete</button>
    </div>
  );
}

export default ExpenseItem;