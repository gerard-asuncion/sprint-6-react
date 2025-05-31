import { useContext } from "react"
import { BudgetsContext } from "../../context/BudgetsContext"
import BudgetForm from "../form/BudgetForm"
import CustomBudgetsHandling from "../form/CustomBudgetsHandling"
import { displayCustomBudgetsSection } from "../../utils/utils"

const CustomBudgetsSection = () => {

  const { budgets } = useContext(BudgetsContext)

  return (
    <section className="flex flex-col items-center">
        <BudgetForm></BudgetForm>
        <section className={`w-90/100 ${displayCustomBudgetsSection(budgets)}`}>
          <hr className={`border-2 border-gray-300 border-dashed my-10 w-full`}/>
          <CustomBudgetsHandling></CustomBudgetsHandling> 
        </section>
    </section>
  )
}

export default CustomBudgetsSection
