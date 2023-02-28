import ExpenseItem from "./components/ExpenseItem";
const expense =[
  { amount : 200 , title:"food"},
  { amount : 300 , title:"movie"},
  { amount : 400 , title:"petrol"},
  { amount : 200 , title:"grocery"}

]
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title ={expense[0].title } amount={expense[0].amount} ></ExpenseItem>
      <ExpenseItem title ={expense[1].title } amount={expense[1].amount} ></ExpenseItem>
      <ExpenseItem title ={expense[2].title } amount={expense[2].amount} ></ExpenseItem>
      <ExpenseItem title ={expense[3].title } amount={expense[3].amount}></ExpenseItem>
    </div>
  );
}

export default App;
