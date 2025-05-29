import { useState, useContext } from "react"
import { PriceContext } from "../context/PriceContext"
import { Budget } from "../classes/Budget"
import { BudgetsContext } from "../context/BudgetsContext"

const useSubmit = () => {

    const { setBudgets } = useContext(BudgetsContext)
    const { totalPrice } = useContext(PriceContext)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<number>(0)
    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const newBudget: Budget = new Budget(name, phone, email, totalPrice)

        setBudgets(prevArr => [...prevArr, newBudget])    

    }

    const resetBudgets = () => {

        setBudgets([])
        localStorage.removeItem("arrBudgets")

    }

    return { setName, setPhone, setEmail, handleSubmit, resetBudgets }
  
}

export default useSubmit
