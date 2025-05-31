import { Routes, Route } from "react-router-dom"
import MainApp from "./pages/MainApp";
import WelcomePage from "./pages/WelcomePage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/app" element={<MainApp />} />
    </Routes>
  )
}

export default App
