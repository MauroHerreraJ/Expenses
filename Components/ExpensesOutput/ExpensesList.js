import { FlatList,Text } from "react-native";

function renderExpensesUtem(itemData){
    return <Text>{itemData.item.description}</Text>

}

function ExpensesList({expenses}){
    return <FlatList 
    data={expenses} 
    renderItem={renderExpensesUtem} 
    keyExtractor={(item)=> item.id}/>
}
export default ExpensesList;