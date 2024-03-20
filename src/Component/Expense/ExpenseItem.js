import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React,{useState} from 'react';
import Card from '../UI/Card';
const ExpenseItem=(props)=>
{
   const [isDelete,setIsDelete]=useState(false);
const deleteClickHandler=()=>
{

  setIsDelete(true);
};
  if(isDelete)
  {
    return null;
  }

  return(
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={deleteClickHandler}>DELETE EXPENSE</button>
    </Card>
  );
}
export default ExpenseItem;