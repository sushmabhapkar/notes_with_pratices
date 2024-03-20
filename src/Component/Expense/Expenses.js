import React,{useState} from "react";
//import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props)
{
const[filteredYear,setFilteredYear]=useState('2020');
const filterChangeHandler=(selectedYear)=>
{
setFilteredYear(selectedYear);
};

const FilteredExpenses=props.items.filter(expense=>{

  return expense.date.getFullYear().toString()===filteredYear;
})
return(
<Card className="expenses">
  <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
      />
     
    <ExpenseList items={FilteredExpenses}/>
     </Card>
);
}
export default Expenses;