
import { useContext } from "react"
import CustomBudgetDisplay from "../ui/CustomBudgetDisplay"
import { BudgetsContext } from "../../context/BudgetsContext"
import type { CustomBudgetSortProps } from "../../types/types"

const CustomBudgetsSort = ({value}: CustomBudgetSortProps) => {

    const { budgets } = useContext(BudgetsContext)
  
    return (
    <>
        {budgets.map(budget => 
            <CustomBudgetDisplay
                key={budget.id}
                budget={budget}>
            </CustomBudgetDisplay>)}
    </>
  )
}

export default CustomBudgetsSort
