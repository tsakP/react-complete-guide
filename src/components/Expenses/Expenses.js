import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
   const [selectedYear, setSelectedYear] = useState('2020');

   const yearSelectedHandler = year => {
      setSelectedYear(year);
   }

   const filteredExpenses = props.data.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
   });



   return (
      <div>
         <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} onYearSelection={yearSelectedHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList data={filteredExpenses} />
         </Card>
      </div>
   );
}

export default Expenses;