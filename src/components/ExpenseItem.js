import './ExpenseItem.css';

function ExpenseItem(props) {
   const expenseDate = new Date(2023, 0, 9);
   const expenseTitle = 'Car Insurance';
   const expenseAmount = 298.67;

   return (
      <div className='expense-item'>
         <div>{props.date.toISOString()}</div>
         <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
         </div>
      </div>
   );
}

export default ExpenseItem;