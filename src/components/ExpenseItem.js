import './ExpenseItem.css';

function ExpenseItem() {
   const expenseDate = new Date();
   const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      weekday: 'short' // optional values: long/short/narrow
   }
   const expenseTitle = 'Car Insurance';
   const expenseAmount = 298.67;

   return (
      <div className='expense-item'>
         <div>{Intl.DateTimeFormat('en-UK', options).format(expenseDate)}</div>
         <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>{expenseAmount}</div>
         </div>
      </div>
   );
}

export default ExpenseItem;