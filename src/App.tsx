import sections from "./data/sections.json"
import Header from "./components/Header"
import Checkbox from "./components/Checkbox"

function App() {
 
  return (
    <>
      <Header></Header>
      {sections.map(section => <Checkbox key={section.id} currentSection={section}></Checkbox>)}
    </>
  )
}

export default App
