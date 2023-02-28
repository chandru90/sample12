import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/newexpense/NewExpense';

function App() {

  return (
    <div>
      <NewExpense></NewExpense>
      <NewExpense></NewExpense>
      <NewExpense></NewExpense>
    </div>
  );
}

export default App;