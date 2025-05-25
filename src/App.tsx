import sections from "./data/sections.json"
import Header from "./components/Header"
import Checkbox from "./components/Checkbox"
import Budget from "./components/Budget"

function App() {
 
  return (
    <>
      <Header></Header>
      {sections.map(section => <Checkbox key={section.id} currentSection={section}></Checkbox>)}
      <Budget></Budget>
    </>
  )
}

export default App
