import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className='expenses-list__fallback'>Found No Expenses.</p>
  }
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
