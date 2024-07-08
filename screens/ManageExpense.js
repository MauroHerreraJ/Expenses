import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../constanst/styles';

import IconButton from '../UI/IconButton';
import Buttons from '../UI/Buttons';

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    function deleteExpensesHandler() {
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Buttons style={styles.button} mode="flat" onPress={cancelHandler}>
                    Cancel
                </Buttons>
                <Buttons style={styles.button} onPress={confirmHandler}>
                    {isEditing ? "Update" : "Add"}
                </Buttons>
            </View>
            {isEditing &&
                <View style={styles.deletecontainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpensesHandler} />
                </View>
            }
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,

    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deletecontainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    }
})