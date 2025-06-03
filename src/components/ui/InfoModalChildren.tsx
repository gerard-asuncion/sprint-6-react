import type { InfoModalChildrenProps } from "../../types/types"
import { setModalInfoChildrenClassNames } from "../../utils/utils"

const InfoModalChildren = ({type}: InfoModalChildrenProps) => {

    if(type === "pages"){
        return (
            <>
                <h2 className={setModalInfoChildrenClassNames("title")}>
                    Número de pàgines
                </h2>
                <p className={setModalInfoChildrenClassNames("p")}>
                    Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada llenguatge és de 30€.
                </p>
            </>
        )       
    }else if(type === "languages"){
        return (
            <>
                <h2 className={setModalInfoChildrenClassNames("title")}>
                    Número de llenguatges
                </h2>
                <p className={setModalInfoChildrenClassNames("p")}>
                    Afegeix el nombre de llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€.
                </p>
            </>
        )       
    }else{
        return (<></>)
    }
  
}

export default InfoModalChildren
