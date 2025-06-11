import { useContext } from "react"
import { DiscountContext } from "../context/discount/DiscountContext"


const useDiscount = () => {

    const { discount, setDiscount } = useContext(DiscountContext)
 
}

export default useDiscount
