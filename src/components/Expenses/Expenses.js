import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
function Expenses(props){

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
        <Card className='Expenses'>
            <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
        </Card>
    )
}
export default Expenses;