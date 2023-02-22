
import './App.css';
//import Expenses from "./components/Expenses";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
function App(props) {
  console.log(props)

  return (
    <div className="App">
        <Expenses></Expenses>
    </div>
  );
}

export default App;
