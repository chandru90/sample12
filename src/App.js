import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';

const expenses = [
  { date: new Date(2021, 3, 14), amount: 200, title: 'movie' },
  { date: new Date(2021, 3, 14), amount: 300, title: 'hotel' },
  { date: new Date(2021, 3, 14), amount: 400, title: 'grocery' },
  { date: new Date(2021, 3, 14), amount: 200, title: 'travel' }
];

function App() {
  const [expenseList, setExpenseList] = useState(expenses);

  const deleteExpenseHandler = (index) => {
    const updatedExpenseList = [...expenseList];
    updatedExpenseList.splice(index, 1);
    setExpenseList(updatedExpenseList);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseList.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={() => deleteExpenseHandler(index)}
        />
      ))}
    </div>
  );
}

export default App;
