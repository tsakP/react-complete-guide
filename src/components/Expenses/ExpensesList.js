import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = props => {
   if (props.data.length === 0) {
      return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
   }

   return <ul className='expenses-list'>
      {props.data.map(expense => (
         <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
         />
      ))}
   </ul>
};

export default ExpenseList;