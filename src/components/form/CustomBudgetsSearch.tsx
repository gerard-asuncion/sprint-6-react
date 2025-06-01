import useSearch from "../../hooks/useSearch"
import { Budget } from "../../classes/Budget"
import CustomBudgetDisplay from "../ui/CustomBudgetDisplay"
import type { CustomBudgetSearchProps } from "../../types/types"

const CustomBudgetsSearch = ({search}: CustomBudgetSearchProps) => {

    const { instantSearch } = useSearch()
    const foundBudgets: Budget[] = instantSearch(search)

  return (
    <>
    <div>{search}</div>
        {foundBudgets.map(budget => 
            <CustomBudgetDisplay
                key={budget.id}
                budget={budget}>
            </CustomBudgetDisplay>)}
    </>
  )
}

export default CustomBudgetsSearch
