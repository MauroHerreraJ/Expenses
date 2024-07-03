import { Text } from "react-native";
function ManageExpenses({route,navigation}){
    const editedExpensesId = route.params?.expenseId;
    const isEditing = !! editedExpensesId;

    navigation.setOPtions({
        title: isEditing ? "Edit Expenses" : "Add Expense"

    });

    return(
        <Text>Manage Expenses Screen!</Text>
    );
}

export default ManageExpenses;