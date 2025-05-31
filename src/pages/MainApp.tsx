import Header from "../components/ui/Header"
import Checkbox from "../components/form/Checkbox"
import TotalBudget from "../components/ui/TotalBudget"
import BudgetForm from "../components/form/BudgetForm"
import PriceProvider from "../context/PriceProvider"
import SectionsProvider from "../context/SectionsProvider";
import useIds from "../hooks/useIds";
import BudgetsProvider from "../context/BudgetsProvider"

const MainApp = () => {

  const { arrSectionsId } = useIds()

  return (
    <BudgetsProvider>
      <SectionsProvider>
        <PriceProvider>
          <Header></Header>
          {arrSectionsId.map(id => 
          <Checkbox 
          key={id} 
          id={id}
          ></Checkbox>)}
          <TotalBudget></TotalBudget>
          <BudgetForm></BudgetForm>
        </PriceProvider>
      </SectionsProvider>
    </BudgetsProvider>
  )
}

export default MainApp
