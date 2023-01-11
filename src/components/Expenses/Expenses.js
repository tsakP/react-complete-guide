import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
   const [selectedYear, setSelectedYear] = useState('2022');

   const yearSelectedHandler = year => {
      setSelectedYear(year);
   }

   return (
      <div>
         <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onYearSelection={yearSelectedHandler} />
            {props.data.map(expense => (
               <ExpenseItem
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
               />
            ))}
         </Card>
      </div>
   );
}

export default Expenses;