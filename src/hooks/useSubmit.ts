import { useState, useContext } from "react"
import { PriceContext } from "../context/PriceContext"

const useSubmit = () => {

    const { totalPrice } = useContext(PriceContext)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState("")

    const handleSubmit = () => {

    }

    return { setName, setPhone, setEmail, handleSubmit }
  
}

export default useSubmit
