import { BudgetsContext } from "../../context/BudgetsContext"
import { useContext } from "react"
import useSearch from "../../hooks/useSearch"
import CustomBudgetDisplay from "../ui/CustomBudgetDisplay"

const CustomBudgetsHandling = () => {

  const { budgets } = useContext(BudgetsContext)
  const { search, setSearch } = useSearch()

  return (
    <>
      <h2 className="text-lg font-bold">Pressupostos en curs:</h2>
      <nav className="flex justify-between">
        <form className="flex border-2 border-gray-500 rounded-md">
          <input 
            type="text" 
            name="search" 
            className="focus:outline-none"
            onChange={(e) => setSearch(e.target.value)} />
          <img src="/search.svg" alt="search" className="size-5" />
        </form>
        <select name="sort" id="sort">
          <option value="1">Data</option>
          <option value="2">Import</option>
          <option value="3">Nom</option>
        </select>
      </nav>
      {budgets.map(budget => 
        <CustomBudgetDisplay
          key={budget.id}
          budget={budget}>
        </CustomBudgetDisplay>
      )}
      
    </>
  )
}

export default CustomBudgetsHandling
