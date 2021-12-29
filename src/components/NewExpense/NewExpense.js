import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }
  const startEditingButtonHandler = () => {
    setIsEditing(true)
  }
  const stopEditingButtonHandler = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingButtonHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCance={stopEditingButtonHandler} />}
    </div>
  )
}

export default NewExpense
