import useSubmit from "../../hooks/useSubmit"
import { useContext } from "react"
import { BudgetsContext } from "../../context/BudgetsContext"

const BudgetForm = () => {

  const { budgets } = useContext(BudgetsContext)

  const { setName, setPhone, setEmail, handleSubmit, resetBudgets } = useSubmit()

  console.log(budgets)

  return (
    <section className="flex flex-col items-around w-90/100 p-4 rounded-lg m-auto shadow-md">
      <h2 className="text-lg font-bold">Demanar pressupost</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-500 rounded-md"
          type="text" 
          name="name" 
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom" />
        <input 
          className="border-2 border-gray-500 rounded-md"  
          type="number" 
          name="phone" 
          id="phone"
          onChange={(e) => setPhone(Number(e.target.value))}
          placeholder="Telèfon" />
        <input 
          className="border-2 border-gray-500 rounded-md"
          type="email" 
          name="email" 
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" />
        <button 
          className="text-white bg-gray-800 border-2 border-gray-800 rounded-md"
          type="submit">
          Sol·licitar pressupost
        </button>
      </form>
      <button 
          className="text-white bg-gray-800 border-2 border-gray-800 rounded-md"
          onClick={resetBudgets}>
          Reset
        </button>
    </section>
  )
}

export default BudgetForm
