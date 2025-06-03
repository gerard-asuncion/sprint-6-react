import { useContext, useState } from "react"
import { BudgetsContext } from "../context/BudgetsContext"
import type { Budget } from "../classes/Budget"

const useSearch = () => {

  const { budgets } = useContext(BudgetsContext)

  const [search, setSearch] = useState("")

  const nameSearch = (search: string): Budget[] => budgets.filter(budget => budget.name.toLowerCase().includes(search.toLowerCase()))
  const emailSearch = (search: string): Budget[] => budgets.filter(budget => budget.email.toLowerCase().includes(search.toLowerCase()))
  const phoneSearch = (search: string): Budget [] => budgets.filter(budget => budget.phone.includes(search))

  const instantSearch = (search: string): Budget[] => {
  
    const foundNames: Budget[] = nameSearch(search)
    const foundEmails: Budget[] = emailSearch(search)
    const foundPhones: Budget[] = phoneSearch(search)

    const merged: Budget[] = [...foundNames, ...foundEmails, ...foundPhones]
    const foundBudgets: Budget[] = [...new Set(merged)]
    const sortedBudgets: Budget[] = foundBudgets.sort((a, b) => 
      a.name === b.name
      ? a.totalBudget === b.totalBudget
        ? a.date.getTime() - b.date.getTime()
        : a.totalBudget - b.totalBudget
      : a.name.localeCompare(b.name))

    return sortedBudgets

  }

  return { search, setSearch, instantSearch }

}

export default useSearch
