import { useContext, useEffect } from "react"
import { DiscountContext } from "../context/discount/DiscountContext"
import { SectionsContext } from "../context/SectionsContext"
import { applyDiscount } from "../utils/utils"


const useDiscount = () => {

    const { discount } = useContext(DiscountContext)
    const { setSections } = useContext(SectionsContext)

    useEffect(() => {

        setSections(prev => prev.map(section => { return {...section, hasDiscount: !section.hasDiscount} }))
        setSections(prev => prev.map(section => { return {...section, price: applyDiscount(section.price, section.hasDiscount)}}))

    }, [discount])
 
}

export default useDiscount
