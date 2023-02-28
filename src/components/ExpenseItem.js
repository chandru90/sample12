

function ExpenseItem(props) {
    const clickHandler = () => {
      console.log("Clicked");
      const expenseItem = document.querySelector(".expense-item");
      expenseItem.remove();
    };
  
    return (
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
  
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Delete</button>
      </div>
    );
  }
export default ExpenseItem;