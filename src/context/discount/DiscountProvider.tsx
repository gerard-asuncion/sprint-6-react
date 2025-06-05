import { DiscountContext } from "./DiscountContext"
import { useState } from "react"
import type { ProviderProps } from "../../types/types"

const DiscountProvider = ({children}: ProviderProps) => {
    const [discount, setDiscount] = useState<boolean>(false)
    return (
    <DiscountContext.Provider value={{discount, setDiscount}}>
        {children}
    </DiscountContext.Provider>
  )
}

export default DiscountProvider
