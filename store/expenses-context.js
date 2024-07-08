import { createContext, useReducer } from "react";

 export const ExpensesContext = createContext({
    expenses: [],
    addExpenses:({description,amout,date})=>{},
    deletedExpenses:(id)=>{},
    updateExpenses:(id,{description,amout,date})=>{}
 });

 function expensesReducer(state,action){
    switch (action.type) {
      case "ADD":
      case "UPDATE":
      case "DELETE":
        default: 
           return state;
    }
 }

 function ExpensesContextProvider({children}){
    const [expensesState,dispatch]=useReducer(expensesReducer);
    return<ExpensesContext.Provider>{children}</ExpensesContext.Provider>
 }

 export default ExpensesContextProvider;

