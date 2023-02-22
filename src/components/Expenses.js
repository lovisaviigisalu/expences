import ExpenseItem from "./ExpenseItem";
function Expenses(props){
    console.log(props)
    const expenses =[
        {
            date : new Date(2023, 0, 10),
            title : 'New book',
            price : 30.99
        },
        {
            date : new Date(2023, 0, 10),
            title : 'New jeans',
            price : 89.99
        }]
    return(
        <div className='Expenses'>
            <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
        </div>
    )
}
export default Expenses;