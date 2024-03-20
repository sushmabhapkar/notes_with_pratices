import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React,{useState} from 'react';
import Card from '../UI/Card';
const ExpenseItem=(props)=>
{
   const[title,setTitle]=useState(props.title);
 

  const updateClickHandler=()=>
  {
      setTitle('updated!!');
      console.log(title);
  }
  return(
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={updateClickHandler}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;