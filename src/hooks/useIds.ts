import { useContext } from "react"
import { SectionsContext } from "../context/SectionsContext"

const useIds = () => {

    const { sections } = useContext(SectionsContext)

    const arrSectionsId: number[] = []

    for(let i = 1; i <= sections.length; i++){
        arrSectionsId.push(i)
    }

    return { arrSectionsId }
  
}

export default useIds