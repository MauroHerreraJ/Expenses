import { FlatList} from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpensesUtem(itemData){
    return <ExpenseItem {...itemData.item}/>

}

function ExpensesList({expenses}){
    return (
   
    <FlatList 
    data={expenses} 
    renderItem={renderExpensesUtem} 
    keyExtractor={(item)=> item.id}/>
  
);
}
export default ExpensesList;


