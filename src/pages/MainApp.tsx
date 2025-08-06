import BudgetsProvider from "../context/budgets/BudgetsProvider"
import SectionsProvider from "../context/sections/SectionsProvider"
import PriceProvider from "../context/price/PriceProvider"
import DiscountProvider from "../context/discount/DiscountProvider"
import Header from "../components/ui/Header"
import DiscountSwitch from "../components/form/DiscountSwitch"
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
          <DiscountProvider>
            <section className="bg-amber-100 pt-10 md:pt-15">
              <Header></Header>
              <DiscountSwitch></DiscountSwitch>
              {arrSectionsId.map(id => 
              <Checkbox 
              key={id} 
              id={id}
              ></Checkbox>)}
              <TotalBudget></TotalBudget>
              <CustomBudgetsSection></CustomBudgetsSection>
            </section>
          </DiscountProvider>
        </PriceProvider>
      </SectionsProvider>
    </BudgetsProvider>
  )
}

export default MainApp
