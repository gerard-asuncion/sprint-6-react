import { useState, useContext } from "react"
import { PriceContext } from "../context/price/PriceContext"
import { Budget } from "../classes/Budget"
import { BudgetsContext } from "../context/budgets/BudgetsContext"
import { SectionsContext } from "../context/sections/SectionsContext"
import { ValidationContext } from "../context/validation/ValidationContext"
import { ValidationError } from "../classes/ValidationError"
import type { Section, ErrorType } from "../types/types"
import { validationErrorMessage } from "../utils/utils"

const useSubmit = () => {

    const { setBudgets } = useContext(BudgetsContext)
    const { sections } = useContext(SectionsContext)
    const { totalPrice } = useContext(PriceContext)
    const { errors, setErrors } = useContext(ValidationContext)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {

        e.preventDefault()

        const validationErrors: ErrorType[] = []

        try {

            if(name === "" || /\d/.test(name)) validationErrors.push({
                input: "name",
                message: "El camp 'nom' no pot quedar buit ni contenir números."
            })
            if(!(/^\d+$/.test(phone)) || phone.length < 9) validationErrors.push({
                input: "phone",
                message: "El camp 'telèfon' ha de contenir nou dígits."
            })
            if(!email.includes("@") || !email.includes(".")) validationErrors.push({
                input: "email",
                message: "El camp 'email' no conté un email vàlid."
            })
            if(totalPrice === 0) validationErrors.push({
                message: "El pressupost no pot ser de 0€."
            })

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
            ? setErrors([{message: err.message}, ...validationErrors])
            : setErrors([{message: `Unexpected: ${err}`}])

        }finally{

            setName("")
            setPhone("")
            setEmail("")

            validationErrors.splice(0, validationErrors.length)

        }

    }

    const resetBudgets = () => {

        setErrors([])
        setBudgets([])
        localStorage.removeItem("arrBudgets")

    }

    return { name, setName, phone, setPhone, email, setEmail, handleSubmit, resetBudgets }
  
}

export default useSubmit