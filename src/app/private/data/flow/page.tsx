"use client";
import * as Chart from "@components/chart";
import { daysInMonth, aleatoryMonthData } from '@private/data/layout';
import { useState } from "react";
import styles from './flow.module.scss';
import cn from '@lib/clsx';


function ExpenseTable() {
  interface Expense {
    id: number
    date: string
    description: string
    amount: number
    category: string
  }
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      date: "01/01/2025",
      description: "Gasto em viagem",
      amount: -2050,
      category: "Travel",
    },
    {
      id: 2,
      date: "01/01/2025",
      description: "Gasto em viagem",
      amount: -2050,
      category: "Travel",
    },
    {
      id: 3,
      date: "01/01/2025",
      description: "Gasto em viagem",
      amount: -2050,
      category: "Travel",
    },
    {
      id: 4,
      date: "01/01/2025",
      description: "Gasto em viagem",
      amount: -2050,
      category: "Travel",
    },
    {
      id: 5,
      date: "01/01/2025",
      description: "Gasto em viagem",
      amount: -2050,
      category: "Travel",
    },
    {
      id: 6,
      date: "01/01/2025",
      description: "Gasto em viagem",
      amount: -2050,
      category: "Travel",
    },
  ])
  const handleAdd = () => {
    const newExpense: Expense = {
      id: expenses.length + 1,
      date: new Date().toLocaleDateString("pt-BR"),
      description: "Nova despesa",
      amount: -1000,
      category: "General",
    }
    setExpenses([...expenses, newExpense])
  }
  const handleEdit = (id: number) => {
    console.log("Edit expense:", id)
  }

  return (
    <div className={styles.expenseTable}>
      <div className={styles.expensesContainer}>
        {expenses.map((expense, index) => (<div key={index} className={styles.expenseRow}>

          <div className={styles.expenseDate}>Data: {expense.date}</div>

          <div className={cn(styles.group, styles.mainInfo)}>
            <div className={styles.expenseDescription}>Descrição: <span>{expense.description}</span></div>
            <div className={cn(styles.expanseAmount, expense.amount < 0 ? styles.negativeRow : styles.positiveRow)}>Valor: <span>{expense.amount}</span></div>
          </div>
          
          <div className={styles.group}>
            <div className={styles.expenseCategory}>{expense.category}</div>
            <button className={styles.editButton} onClick={() => handleEdit(expense.id)}>Editar</button>
          </div>

        </div>))}
      </div>
      <div className={styles.buttonContainer}>
          <button className={styles.addButton} onClick={handleAdd}>Adicionar</button>
      </div>
    </div>
  )
}

export default function Page(){
  return(
    <div className={styles.page}>
      <div className={styles.chartContainer}>
        <Chart.BarChart
          labels={daysInMonth}
          datasets={[{ data: aleatoryMonthData }, { data: aleatoryMonthData }]}
        />
      </div>

      <ExpenseTable/>
    </div>
  )
}
