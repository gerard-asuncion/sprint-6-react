import { useContext, useState } from "react"
import { BudgetsContext } from "../context/BudgetsContext"
import type { Budget } from "../classes/Budget"

const useSearch = () => {

    const { budgets } = useContext(BudgetsContext)

  const [search, setSearch] = useState("")

  const instantSearch = (search: string): Budget[] => budgets.filter(budget => budget.name.toLowerCase().includes(search.toLowerCase()))

  return { search, setSearch, instantSearch }

}

export default useSearch
