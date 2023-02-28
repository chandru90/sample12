import './NewExpenseForm.css'
import './NewExpense.css'
const NewExpenseForm =()=>{
    const titlehandle =(event)=>{
        console.log(event.target.value)
    }
    
    return (
    <form> <div className="new-expense__controls"></div>
    <div className="new-expense__control"></div>
    <label>title</label>
    <input type = "text" onChange={titlehandle} />
    <div className="new-expense__control"></div>
    <label>amount</label>
    <input type = 'number' />
    <div className="new-expense__control"></div>
    <label>date</label>
    <input type = 'date' min = " 2015-1-1"  max = "2018-1-1"/>
  
    <div className="new-expense__actions"></div>
    <button type ='submit'> submit</button>
    
</form>
)
}
export default NewExpenseForm