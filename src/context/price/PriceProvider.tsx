import { PriceContext } from "./PriceContext"
import type { Section, ProviderProps } from "../../types/types"
import { useContext, useState } from "react"
import { SectionsContext } from "../sections/SectionsContext"

const PriceProvicer = ({children}: ProviderProps) => {

    const { sections } = useContext(SectionsContext)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const webSection: Section = sections.find(section => section.isWeb)!
    const [webPrice, setWebPrice] = useState<number>(webSection.price)

  return (
    <PriceContext.Provider value={{totalPrice, setTotalPrice, webPrice, setWebPrice}}>
        {children}
    </PriceContext.Provider>
  )
}

export default PriceProvicer
