
function ExpenseItem(props)
{
   
   
   return <div className='expense-item'>
          
       
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs.{props.amount}</div>
        <div className='expense-item__location'>{props.location}</div>
        </div>
    </div>
}
export default ExpenseItem;