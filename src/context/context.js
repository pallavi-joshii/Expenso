  import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) 

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);


    const deleteTransactions = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransactions = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction})
    }

    const balance = transactions.reduce((acc, crrVlue) => crrVlue.type === 'Expense' ? acc - crrVlue.amount : acc + crrVlue.amount, 0 )

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransactions,
            addTransactions,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}