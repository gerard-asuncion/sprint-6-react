import Header from "./Header"
import Checkbox from "./Checkbox"
import Budget from "./Budget"
import PriceProvider from "../context/PriceProvider"
import SectionsProvider from "../context/SectionsProvider";
import useIds from "../hooks/useIds";

const MainApp = () => {

  const { arrSectionsId } = useIds()

  return (
    <SectionsProvider>
      <PriceProvider>
        <Header></Header>
        {arrSectionsId.map(id => 
        <Checkbox 
        key={id} 
        id={id}
        ></Checkbox>)}
        <Budget></Budget>
      </PriceProvider>
    </SectionsProvider>
  )
}

export default MainApp
