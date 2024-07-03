import { Pressable, View, StyleSheet,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constanst/styles";
import { getFormattedDate } from "../../util/date";


function ExpenseItem({Id,description,amount,date}){
    const navigation=useNavigation();

    function expensePressHandler(){
       navigation.navigate("ManageExpenses",{
        expenseId:Id
       });
    }


    return(
        <Pressable onPress={expensePressHandler} style={({pressed})=> pressed && styles.pressed}>
            <View style={styles.expensesItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>

    ); 
}

export default ExpenseItem;

const styles=StyleSheet.create({
    pressed:{
       opacity:0.75
    },
    expensesItem:{
        padding:12,
        marginVertical:8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:6,
        elevation:3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1, height:1},
        shadowOpacity:0.4
    },
    textBase:{
        color: GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:"bold"
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4,
        minWidth:90
    },
    amount:{
        color: GlobalStyles.colors.primary500,
        fontWeight:"bold"
    }

});