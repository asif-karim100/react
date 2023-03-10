import ExpenseDate from './ExpensesDate';
import './ExpenseItem.css';


function ExpenseItem(props) {
 

return (
 
        <div className="expense-item">
          <ExpenseDate date={props.date}></ExpenseDate>
          
          <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">Rs{props.amount}</div>
              {/* <div>{locationOfExpenditure}</div> */}
          </div>
        </div>
);
}

export default ExpenseItem;
