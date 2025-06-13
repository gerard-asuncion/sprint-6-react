import { createContext } from "react"
import type { PriceContextType } from "../../types/types";

export const PriceContext = createContext<PriceContextType>({
    totalPrice: 0,
    setTotalPrice: () => {}
});