
import './ExpenseItem'
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    const expenses=props.App.expenses

    return(
        // eslint-disable-next-line no-undef
        <ExpenseItem expenseData={expenses[0]}></ExpenseItem>,
            // eslint-disable-next-line no-undef
    <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    )
}
export default Expenses