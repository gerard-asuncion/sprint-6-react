import { Routes, Route } from "react-router-dom"
import MainApp from "./components/MainApp";
import Welcome from "./components/Welcome";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/app" element={<MainApp />} />
    </Routes>
  )
}

export default App
