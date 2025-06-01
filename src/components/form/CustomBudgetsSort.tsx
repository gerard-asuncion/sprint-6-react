
import { useContext } from "react"
import CustomBudgetDisplay from "../ui/CustomBudgetDisplay"
import { BudgetsContext } from "../../context/BudgetsContext"
import { sortBudgets } from "../../utils/utils"
import type { CustomBudgetSortProps } from "../../types/types"

const CustomBudgetsSort = ({value}: CustomBudgetSortProps) => {

    const { budgets } = useContext(BudgetsContext)
    const sortResult = sortBudgets(budgets, value)
  
    return (
    <>
        {sortResult.map(budget => 
            <CustomBudgetDisplay
                key={budget.id}
                budget={budget}>
            </CustomBudgetDisplay>)}
    </>
  )
}

export default CustomBudgetsSort
