import { createContext } from "react"
import type { DiscountContextType } from "../../types/types";

export const DiscountContext = createContext<DiscountContextType>({
    discount: false,
    setDiscount: () => {}
});