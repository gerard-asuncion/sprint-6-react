import useSubmit from "../../hooks/useSubmit"
import { useContext } from "react"
import { ValidationContext } from "../../context/validation/ValidationContext"
import { displayColorBorder } from "../../utils/utils"
import ResetModal from "./ResetModal"
import useModal from "../../hooks/useModal"

const BudgetForm = () => {

  const { errors } = useContext(ValidationContext)
  const { name, setName, phone, setPhone, email, setEmail, handleSubmit } = useSubmit()
  const { open, setOpen } = useModal()

  return (
    <>
      <section className="flex flex-col items-around w-90/100 p-4 rounded-lg m-auto shadow-md">
        <h2 className="text-lg font-bold">Demanar pressupost</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={`${displayColorBorder("name", errors)} border-2`}
            type="text" 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom" />
          <input 
            className={`${displayColorBorder("phone", errors)} border-2`}
            type="number" 
            name="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telèfon" />
          <input 
            className={`${displayColorBorder("email", errors)} border-2`}
            type="email" 
            name="email" 
            value={email}
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
            onClick={() => {setOpen(true)}}>
            Reset
          </button>
      </section>
      <section className="w-90/100">
        {errors.map((error, index) => 
          index === 0
          ? <p key={index}>{error.message}</p>
          : <div className="flex items-center gap-2"><img className="size-4" src="/warning.svg" alt="!" /><p key={index}>{error.message}</p></div>
        )}     
      </section>
      <ResetModal open={open} setOpen={setOpen} onClose={() => setOpen(false)}></ResetModal>
    </>
  )
}

export default BudgetForm
