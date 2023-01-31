import React from 'react';
import ExpenseDate from './ExpensesDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

  ///function clickhandler
  const clickHandler =() =>{
    console.log("Clicked!!!!")
  }
 
 

return (
 
        <Card className="expense-item">
          <ExpenseDate date={props.date}></ExpenseDate>
          
          <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">Rs{props.amount}</div>
              {/* <div>{locationOfExpenditure}</div> */}
          </div>
          <button onClick={clickHandler}>Change Title</button>

          {/* delete expense button 
          <button onClick={clickHandler}>Delete Expenses</button> */}

        </Card>
);
}

export default ExpenseItem;
