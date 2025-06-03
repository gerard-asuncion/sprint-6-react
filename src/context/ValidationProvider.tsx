import type { ProviderProps, ErrorType } from "../types/types"
import { ValidationContext } from "./ValidationContext"
import { useState } from "react"

const ValidationProvider = ({children}: ProviderProps) => {

  const [errors, setErrors] = useState<ErrorType[]>([])

  return (
    <ValidationContext.Provider value={{errors, setErrors}}>
      {children}
    </ValidationContext.Provider>
    
  )
}

export default ValidationProvider
