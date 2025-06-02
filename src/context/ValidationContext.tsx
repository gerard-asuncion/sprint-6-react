import { createContext } from "react"
import type { ValidationContextType } from "../types/types";

export const ValidationContext = createContext<ValidationContextType>({
    errors: [],
    setErrors: () => {}
});