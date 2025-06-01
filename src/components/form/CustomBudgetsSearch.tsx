import useSearch from "../../hooks/useSearch"
import { Budget } from "../../classes/Budget"
import CustomBudgetDisplay from "../ui/CustomBudgetDisplay"
import type { CustomBudgetSearchProps } from "../../types/types"

const CustomBudgetsSearch = ({search}: CustomBudgetSearchProps) => {

    const { instantSearch } = useSearch()
    const foundBudgets: Budget[] = instantSearch(search)

    const nothingFound = () => <div>No s'ha trobat cap pressupost amb aquest nom.</div>

  return (
    <>
        {foundBudgets.length > 0
        ? foundBudgets.map(budget => 
            <CustomBudgetDisplay
                key={budget.id}
                budget={budget}>
            </CustomBudgetDisplay>)
        : nothingFound()}
    </>
  )
}

export default CustomBudgetsSearch
