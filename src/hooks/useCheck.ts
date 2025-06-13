import { useContext } from "react"
import { SectionsContext } from "../context/sections/SectionsContext"

const useCheck = () => {

    const { setSections } = useContext(SectionsContext)

    const handleChange = (checked: boolean, id: number): void => {
        
        setSections(prev => prev.map(section => 
            section.id === id
            ? { ...section, isChecked: checked }
            : {...section}          
        ))

    }

    return { handleChange }
}

export default useCheck

