import ExpenseItem from "./components/ExpenseItem";
const expense =[
  { amount : 200 , title:"food" ,location : "pondy"},
  { amount : 300 , title:"movie",location :"pondy"},
  { amount : 400 , title:"petrol",location :"pondy"},
  { amount : 200 , title:"grocery",location :"pondy"}

]
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title ={expense[0].title } amount={expense[0].amount} location={expense[0].location}></ExpenseItem>
      <ExpenseItem title ={expense[1].title } amount={expense[1].amount} location={expense[1].location}></ExpenseItem>
      <ExpenseItem title ={expense[2].title } amount={expense[2].amount} location={expense[2].location}></ExpenseItem>
      <ExpenseItem title ={expense[3].title } amount={expense[3].amount}location={expense[3].location}></ExpenseItem>
    </div>
  );
}

export default App;
