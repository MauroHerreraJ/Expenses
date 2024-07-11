import { View,StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesOutput/ExpensesSummary";
import ExpensesList from "./ExpensesOutput/ExpensesList";
import { GlobalStyles } from "../constanst/styles";



function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
        </View>

    );
}
export default ExpensesOutput;

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:20,
        paddingBottom:0,
        backgroundColor: GlobalStyles.colors.primary700
    }

})

