import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

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
      let expenseContent=<p>No Expenses found</p>;
      if(FilteredExpenses.length>0)
      {
       expenseContent= FilteredExpenses.map(expense=>(

          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
           />
          ));
          
      }
return(
<Card className="expenses">
  <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
      />
     
    {expenseContent}
     </Card>
);
}
export default Expenses;