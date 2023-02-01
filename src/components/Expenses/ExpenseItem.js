import React,{useState} from 'react';
import ExpenseDate from './ExpensesDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title);

  const [amount, setTitle2] = useState(props.amount);
  console.log('ExpenseItem evaluated by React');

  ///function clickhandler(){}
  const clickHandler =() =>{
    setTitle("Updated");
    console.log(title);
    setTitle2('100');
    console.log(amount);
  }

  
  
 

return (
 
        <Card className="expense-item">
          <ExpenseDate date={props.date}></ExpenseDate>
          
          <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">Rs{amount}</div>
              {/* <div>{locationOfExpenditure}</div> */}
          </div>
          <button onClick={clickHandler}>Change Title</button>
          <button onClick={clickHandler}>Change Amount</button>

          {/* delete expense button 
          <button onClick={clickHandler}>Delete Expenses</button> */}

        </Card>
);
}

export default ExpenseItem;
