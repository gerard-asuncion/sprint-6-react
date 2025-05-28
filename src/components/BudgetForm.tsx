import useSubmit from "../hooks/useSubmit"

const BudgetForm = () => {

  const { setName, setPhone, setEmail, handleSubmit } = useSubmit()

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
        <button type="submit">
          Sol·licitar pressupost
        </button>
      </form>
    </section>
  )
}

export default BudgetForm
