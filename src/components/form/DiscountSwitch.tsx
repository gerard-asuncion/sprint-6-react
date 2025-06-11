import { useContext, useEffect } from "react"
import { SectionsContext } from "../../context/SectionsContext"
import { applyDiscount } from "../../utils/utils"
import { PriceContext } from "../../context/PriceContext"
import { DiscountContext } from "../../context/discount/DiscountContext"

const DiscountSwitch = () => {

  const { discount, setDiscount } = useContext(DiscountContext)
  const { setTotalPrice } = useContext(PriceContext)
  const { setSections } = useContext(SectionsContext)

  useEffect(() => {

        setSections(prev => prev.map(section => { return {...section, hasDiscount: !section.hasDiscount} }))
        setSections(prev => prev.map(section => { return {...section, price: applyDiscount(section.price, !section.hasDiscount)}}))

        setTotalPrice(prev => applyDiscount(prev, !discount))

    }, [discount])

  return (
    <article className="flex justify-center w-90/100 p-4 m-auto mt-5 gap-7">
        <div className="text-neutral-600">Pagament mensual</div>
        <label className="relative inline-block w-12 h-6">
            <input 
                type="checkbox" 
                className="peer sr-only"
                name="discountSwitch" 
                checked={discount} 
                onChange={(e) => {setDiscount(e.target.checked)}} />
            <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>
            <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
        </label>
        <div className="text-neutral-600">Pagament anual</div>
    </article>
  )
}

export default DiscountSwitch
