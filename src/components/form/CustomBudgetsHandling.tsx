import { BudgetsContext } from "../../context/BudgetsContext"
import { useState, useContext } from "react"
import useSearch from "../../hooks/useSearch"
import { safetyCustomBudgetsDisplay, displaySearch } from "../../utils/utils"
import CustomBudgetsSearch from "./CustomBudgetsSearch"
import CustomBudgetsSort from "./CustomBudgetsSort"

const CustomBudgetsHandling = () => {

  const { budgets } = useContext(BudgetsContext)
  const { search, setSearch } = useSearch()

  const [sortValue, setSortValue] = useState("1")
  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSortValue(e.target.value)
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
        <select name="sort" id="sort" onChange={handleValueChange} value={sortValue}>
          <option value="1">Data</option>
          <option value="2">Import</option>
          <option value="3">Nom</option>
        </select>
      </nav>
      {safetyCustomBudgetsDisplay(budgets)
      ? displaySearch(search)
        ? <CustomBudgetsSearch search={search}></CustomBudgetsSearch>
        : <CustomBudgetsSort value={sortValue}></CustomBudgetsSort>
      : <div>Sorry! Custom budgets data saved in local storage is corrupted, please make a reset and start again.</div>
      }
     
      
    </>
  )
}

export default CustomBudgetsHandling
