import { useContext } from "react"
import { PriceContext } from "../../context/price/PriceContext"

const TotalBudget = () => {

  const { totalPrice } = useContext(PriceContext)

  return (
    <section className="w-90/100 h-10 p-4 rounded-lg flex justify-end
    items-center m-auto mt-5 font-bold md:w-70/100 md:h-24">
        <h2 className="mr-5 text-lg md:text-3xl">Preu pressuposat:</h2>
        <div className="text-xl md:text-4xl">{totalPrice}€</div>
    </section>
  )
}

export default TotalBudget
