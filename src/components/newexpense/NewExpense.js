import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css'
const NewExpense = (props) => {
    const saveexpensedatahandler=(enterexpensedata)=>{
        const expensedata = {...enterexpensedata }
        props.onadd(expensedata)
    }
  return (
    <div className="new-expense">
      <NewExpenseForm onsaveexpensedata ={saveexpensedatahandler}> </NewExpenseForm>
    </div>
  );
};

export default NewExpense;