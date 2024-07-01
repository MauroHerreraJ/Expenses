import { View } from "react-native";

import ExpensesSummary from "./ExpensesOutput/ExpensesSummary";
import ExpensesList from "./ExpensesOutput/ExpensesList";

const DUMMY_EXPENS = [
    {
    id:"e1",
    description: "A par of shoes",
    amount:59.99,
    date: new Date("2024-12-19")
},

{
    id:"e2",
    description: "A pair of trousers",
    amount:5.99,
    date: new Date("2024-01-09")
},

{
    id:"e3",
    description: "Some bananas",
    amount:89.29,
    date: new Date("2024-05-24")
},

{
    id:"e4",
    description: " A book",
    amount:14.99,
    date: new Date("2024-03-12")
},

{
    id:"e5",
    description: " Another book",
    amount:18.59,
    date: new Date("2024-07-13")
},

];

function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENS} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENS}/>
        </View>

    );
}
export default ExpensesOutput;