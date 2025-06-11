import { useContext, useEffect } from "react"
import { DiscountContext } from "../context/discount/DiscountContext"
import { SectionsContext } from "../context/SectionsContext"
import { applyDiscount } from "../utils/utils"


const useDiscount = () => {

    const { discount } = useContext(DiscountContext)
    const { setSections } = useContext(SectionsContext)

    
 
}

export default useDiscount
