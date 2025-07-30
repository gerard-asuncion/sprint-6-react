import useSubmit from "../../hooks/useSubmit"
import { useContext } from "react"
import { ValidationContext } from "../../context/validation/ValidationContext"
import { displayColorBorder } from "../../utils/utils"

const BudgetForm = () => {

  const { errors } = useContext(ValidationContext)
  const { name, setName, phone, setPhone, email, setEmail, handleSubmit } = useSubmit()

  return (
    <>
      <section className="flex flex-col items-around w-90/100 p-4 rounded-lg m-auto shadow-md gap-2">
        <h2 className="text-lg font-bold w-90/100">Demanar pressupost</h2>
        <form onSubmit={handleSubmit}
        className="flex flex-col gap-2">
          <input
            className={`${displayColorBorder("name", errors)} p-0.5 border-2 rounded-md border-gray-200`}
            type="text" 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom" />
          <input 
            className={`${displayColorBorder("phone", errors)} p-0.5 border-2 rounded-md border-gray-200`}
            type="number" 
            name="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telèfon" />
          <input 
            className={`${displayColorBorder("email", errors)} p-0.5 border-2 rounded-md border-gray-200`}
            type="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />
          <button 
            className="text-white bg-indigo-500 border-2 border-indigo-500 rounded-md p-0.5"
            type="submit">
            Sol·licitar pressupost
          </button>
        </form>
      </section>
      <section className="w-90/100">
        {errors.map((error, index) => 
          index === 0
          ? <p key={index}>{error.message}</p>
          : <div className="flex items-center gap-2"><img className="size-4" src="/warning.svg" alt="!" /><p key={index}>{error.message}</p></div>
        )}     
      </section>
    </>
  )
}

export default BudgetForm
