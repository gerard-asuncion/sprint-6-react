import { BudgetsContext } from "../../context/BudgetsContext"
import { useContext } from "react"
import CustomBudgetDisplay from "../ui/CustomBudgetDisplay"

const CustomBudgetsHandling = () => {

  const { budgets } = useContext(BudgetsContext)

  return (
    <>
      <h2 className="text-lg font-bold">Pressupostos en curs:</h2>
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
