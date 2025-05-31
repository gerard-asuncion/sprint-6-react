import { Routes, Route } from "react-router-dom"
import MainApp from "./pages/MainApp";
import Welcome from "./pages/Welcome";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/app" element={<MainApp />} />
    </Routes>
  )
}

export default App
