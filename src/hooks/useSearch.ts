import { useContext, useState } from "react"
import { BudgetsContext } from "../context/budgets/BudgetsContext"
import type { Budget } from "../classes/Budget"

const useSearch = () => {

  const { budgets } = useContext(BudgetsContext)

  const [search, setSearch] = useState("")

  const instantSearch = (search: string): Budget[] => {
  
    const foundNames: Budget[] = budgets.filter(budget => budget.name.toLowerCase().includes(search.toLowerCase()))
    const foundEmails: Budget[] = budgets.filter(budget => budget.email.toLowerCase().includes(search.toLowerCase()))
    const foundPhones: Budget[] = budgets.filter(budget => budget.phone.includes(search))

    const foundBudgets: Budget[] = [...new Set([...foundNames, ...foundEmails, ...foundPhones])].sort((a, b) => 
      a.name === b.name
      ? a.totalBudget === b.totalBudget
        ? a.date.getTime() - b.date.getTime()
        : a.totalBudget - b.totalBudget
      : a.name.localeCompare(b.name))

    return foundBudgets

  }

  return { search, setSearch, instantSearch }

}

export default useSearch
