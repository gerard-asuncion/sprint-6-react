import Header from "./components/Header"
import Checkbox from "./components/Checkbox"
import Budget from "./components/Budget"
import { useCheck } from "./hooks/useCheck"

function App() {

  const { sections, handleChange } = useCheck()
 
  return (
    <>
      <Header></Header>
      {sections.map(section => 
      <Checkbox 
      key={section.id} 
      currentSection={section}
      active={section.isChecked}
      onToggle={(e) => handleChange(e.target.checked, section.id)}
      ></Checkbox>)}
      <Budget></Budget>
    </>
  )
}

export default App
