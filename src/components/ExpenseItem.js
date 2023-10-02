import './ExpenseItem.css';

function ExpenseItem(){
    return (
    <div className='expense-item'>
        <div>October 2, 2023</div>
        <div className='expense-item__description'>
            <h2>Car Insurance</h2>
            <div className='expense-item__price'>$264.67</div>
        </div>
    </div>)
}

export default ExpenseItem;