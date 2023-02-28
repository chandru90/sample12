import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/newexpense/NewExpense';

function App() {
const addexpense =(exp)=>{
  console.log(exp)
}
  return (
    <div>
      <NewExpense onadd ={addexpense}></NewExpense>
      
    </div>
  );
}

export default App;