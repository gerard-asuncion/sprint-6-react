import { useState, useContext } from "react"
import { PriceContext } from "../context/PriceContext"
import { Budget } from "../classes/Budget"
import { BudgetsContext } from "../context/BudgetsContext"
import { SectionsContext } from "../context/SectionsContext"
import type { Section } from "../types/types"

const useSubmit = () => {

    const { setBudgets } = useContext(BudgetsContext)
    const { sections } = useContext(SectionsContext)
    const { totalPrice } = useContext(PriceContext)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<number>(0)
    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if(name === "") return alert("No name")

        const activeSections: string[] = sections.filter(section => section.isChecked).map(checked => checked.section)

        const webSection: Section = sections.find(section => section.isWeb)!

        const newBudget: Budget = new Budget(name, phone, email, totalPrice, activeSections, webSection.pages, webSection.languages)

        setBudgets(prevArr => [...prevArr, newBudget])    

    }

    const resetBudgets = () => {

        setBudgets([])
        localStorage.removeItem("arrBudgets")

    }

    return { setName, setPhone, setEmail, handleSubmit, resetBudgets }
  
}

export default useSubmit
