import React from "react";

import './ExpensesFilter.css';
const ExpensesFilter = (props) => {
    const changeYearhandler = (event) => {
        console.log('Changed year by ExpenseFilter.js:')
        console.log(event.target.value)
        const year = {
            year: event.target.value
        }

        props.onSaveFilterData(year)
    }

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={changeYearhandler}>
                    <option value ='2023'>2023</option>
                    <option value ='2024'>2024</option>
                    <option value ='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter