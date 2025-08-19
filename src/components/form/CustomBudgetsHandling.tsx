import { BudgetsContext } from "../../context/budgets/BudgetsContext"
import { useState, useContext } from "react"
import useSearch from "../../hooks/useSearch"
import { safetyCustomBudgetsDisplay, displaySearch } from "../../utils/utils"
import CustomBudgetsSearch from "./CustomBudgetsSearch"
import CustomBudgetsSort from "./CustomBudgetsSort"
import useModal from "../../hooks/useModal"
import ResetModal from "./ResetModal"

const CustomBudgetsHandling = () => {

  const { budgets } = useContext(BudgetsContext)
  const { search, setSearch } = useSearch()
  const { open, setOpen } = useModal()

  const [sortValue, setSortValue] = useState("1")
  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSortValue(e.target.value)
  
  return (
    <>
      <h2 className="text-md font-bold mb-4 md:text-2xl">Pressupostos en curs:</h2>
      <nav className="flex justify-between shadow-md md:gap-10 bg-white rounded-md p-4 md:p-6">
        <form className="flex border-2 border-gray-400 items-center rounded-md text-sm md:text-base px-1 md:px-3">
          <input 
            type="text" 
            name="search"
            placeholder="Cercar"
            className="focus:outline-none"
            onChange={(e) => setSearch(e.target.value)} />
          <img src="/search.svg" alt="search" className="size-4 cursor-pointer" />
        </form>
        <article className="flex gap-3 md:gap-10">
          <select name="sort" id="sort" onChange={handleValueChange} value={sortValue} className="text-xs md:text-base">
            <option value="1">Data (més antics)</option>
            <option value="2">Data (més recents)</option>
            <option value="3">Import (més barats)</option>
            <option value="4">Import (més cars)</option>
            <option value="5">Nom</option>
          </select>
          <button
            className="text-white bg-indigo-500 border-2 border-indigo-500 rounded-md py-1 px-2 md:px-5 cursor-pointer"
            onClick={() => {setOpen(true)}}>
            Reset
          </button>
        </article>
      </nav>
      <ResetModal open={open} setOpen={setOpen} onClose={() => setOpen(false)}></ResetModal>
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
