import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
const Expenses = (props) => {

    const yearExpenseDatahandler = (props) =>{
        console.log('Expenses.js Changed year to ' + (props.year))
    }

    return(
        <Card className='Expenses'>
            <ExpensesFilter onSaveFilterData={yearExpenseDatahandler}></ExpensesFilter>
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}
export default Expenses;