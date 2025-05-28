import Header from "./components/Header"
import Checkbox from "./components/Checkbox"
import Budget from "./components/Budget"
import PriceProvider from "./context/PriceProvider"
import SectionsProvider from "./context/SectionsProvider";
import useIds from "./hooks/useIds";

function App() {

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

export default App

// {sections.map(section => 
//         <Checkbox 
//         key={section.id} 
//         currentSection={section}
//         active={section.isChecked}
//         onToggle={(e) => {
//           handleChange(e.target.checked, section.id);
//           capturateCheck(e.target.checked);
//         }}
