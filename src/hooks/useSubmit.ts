import { useState, useContext } from "react"
import { PriceContext } from "../context/PriceContext"
import { Budget } from "../classes/Budget"
import { BudgetsContext } from "../context/BudgetsContext"
import { SectionsContext } from "../context/SectionsContext"
import { ValidationContext } from "../context/ValidationContext"
import { ValidationError } from "../classes/ValidationError"
import type { Section } from "../types/types"
import { validationErrorMessage } from "../utils/utils"

const useSubmit = () => {

    const { setBudgets } = useContext(BudgetsContext)
    const { sections } = useContext(SectionsContext)
    const { totalPrice } = useContext(PriceContext)
    const { errors, setErrors } = useContext(ValidationContext)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<number>(0)
    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {

        e.preventDefault()

        const validationErrors: string[] = []

        try {

            if(name === "" || /\d/.test(name)) validationErrors.push("El camp 'nom' no pot quedar buit ni contenir números.")
            if(isNaN(phone) || phone.toString().length < 9) validationErrors.push("El camp 'telèfon' ha de contenir nou dígits.")
            if(!email.includes("@") || !email.includes(".")) validationErrors.push("El camp 'email' no conté un email vàlid.")
            if(totalPrice === 0) validationErrors.push("El pressupost no pot ser de 0€.")

            if(validationErrors.length > 0) { 
                const message = validationErrorMessage(validationErrors)
                throw new ValidationError(message, validationErrors) 
            }

            const activeSections: string[] = sections.filter(section => section.isChecked).map(checked => checked.section)
            const webSection: Section = sections.find(section => section.isWeb)!
        
            const newBudget: Budget = new Budget(name, phone, email, totalPrice, activeSections, webSection.pages, webSection.languages)

            setBudgets(prevArr => [...prevArr, newBudget])
            
            if(errors.length > 0) setErrors([])  

        }catch(err){

            err instanceof ValidationError
            ? setErrors([err.message, ...validationErrors])
            : setErrors(["Unexpected:", `${err}`])

        }finally{

            validationErrors.splice(0, validationErrors.length)

        }

    }

    const resetBudgets = () => {

        setBudgets([])
        localStorage.removeItem("arrBudgets")

    }

    return { setName, setPhone, setEmail, handleSubmit, resetBudgets }
  
}

export default useSubmit
