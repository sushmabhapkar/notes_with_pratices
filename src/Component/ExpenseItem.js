import './ExpenseItem.css';
import React from 'react';
const ExpenseItem=()=>
{
    const ExpenseDate=new Date(2021,2,28);
    const ExpenseTitle='Car Insurances';
    const ExpensePrice=294.69;
  return(
    <div className='expense-item'>
        <div>{ExpenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{ExpenseTitle}</h2>
            <div className='expense-item__price '>${ExpensePrice}</div>
        </div>
    </div>
  );
}
export default ExpenseItem;