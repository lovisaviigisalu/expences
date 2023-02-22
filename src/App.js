
import './App.css';


//import Expenses from "./components/Expenses";
import ExpenseItem from "./components/ExpenseItem";
function App(props) {
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
  return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expenses[1]}></ExpenseItem>

    </div>
  );
}

export default App;
