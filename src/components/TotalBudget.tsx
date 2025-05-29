import { useContext } from "react"
import { PriceContext } from "../context/PriceContext"

const TotalBudget = () => {

  const { totalPrice } = useContext(PriceContext)

  return (
    <section className="w-90/100 h-10 p-4 rounded-lg flex justify-end
    items-center m-auto mt-5 font-bold">
        <h2 className="mr-5 text-lg">Preu pressuposat:</h2>
        <div className="text-xl">{totalPrice}€</div>
    </section>
  )
}

export default TotalBudget
