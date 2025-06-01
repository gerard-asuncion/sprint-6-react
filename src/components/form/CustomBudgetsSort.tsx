
import { useContext } from "react"
import CustomBudgetDisplay from "../ui/CustomBudgetDisplay"
import { BudgetsContext } from "../../context/BudgetsContext"

const CustomBudgetsSort = () => {

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
