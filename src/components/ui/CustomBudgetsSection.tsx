import { useContext } from "react"
import { BudgetsContext } from "../../context/budgets/BudgetsContext"
import BudgetForm from "../form/BudgetForm"
import CustomBudgetsHandling from "../form/CustomBudgetsHandling"
import { displayCustomBudgetsSection } from "../../utils/utils"
import ValidationProvider from "../../context/validation/ValidationProvider"

const CustomBudgetsSection = () => {

  const { budgets } = useContext(BudgetsContext)

  return (
    <ValidationProvider>
      <section className="flex flex-col items-center">
        <BudgetForm></BudgetForm>
        <section className={`w-90/100 md:w-70/100 ${displayCustomBudgetsSection(budgets)}`}>
          <hr className={`border-2 border-gray-300 border-dashed my-10 w-full`}/>
          <CustomBudgetsHandling></CustomBudgetsHandling> 
        </section>
      </section>
    </ValidationProvider>
  )
}

export default CustomBudgetsSection
