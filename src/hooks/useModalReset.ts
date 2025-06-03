import { useState } from "react"
import useSubmit from "./useSubmit"

const useModalsReset = () => {

    const { resetBudgets } = useSubmit()

    const [open, setOpen] = useState(false)

    return { open, setOpen, resetBudgets }

}

export default useModalsReset
