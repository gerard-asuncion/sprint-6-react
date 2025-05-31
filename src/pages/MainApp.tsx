import BudgetsProvider from "../context/BudgetsProvider"
import SectionsProvider from "../context/SectionsProvider"
import PriceProvider from "../context/PriceProvider"
import Header from "../components/ui/Header"
import Checkbox from "../components/form/Checkbox"
import TotalBudget from "../components/ui/TotalBudget"
import CustomBudgetsSection from "../components/ui/CustomBudgetsSection"
import useIds from "../hooks/useIds";

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
          <CustomBudgetsSection></CustomBudgetsSection>
        </PriceProvider>
      </SectionsProvider>
    </BudgetsProvider>
  )
}

export default MainApp
