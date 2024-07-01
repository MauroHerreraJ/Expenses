import ExpensesOutput from "../Components/ExpensesOutput";

function RecentExpenses(){
    return(
        <ExpensesOutput expensesPeriod="Last 7 Days"/>
    );
}

export default RecentExpenses;