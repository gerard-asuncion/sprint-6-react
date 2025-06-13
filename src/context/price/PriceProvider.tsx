import { PriceContext } from "./PriceContext"
import type { ProviderProps } from "../../types/types"
import { useState } from "react"

const PriceProvicer = ({children}: ProviderProps) => {

    const [totalPrice, setTotalPrice] = useState<number>(0)

  return (
    <PriceContext.Provider value={{totalPrice, setTotalPrice}}>
        {children}
    </PriceContext.Provider>
  )
}

export default PriceProvicer
