import { useContext, useState, useRef, useEffect } from "react"
import { SectionsContext } from "../context/SectionsContext"
import { PriceContext } from "../context/PriceContext"

const useExtras = (checked: boolean) => {

    const [totalExtras, setTotalExtras] = useState<number>(0)

    const { sections } = useContext(SectionsContext)

    const { setTotalPrice } = useContext(PriceContext)

    const previousExtrasRef = useRef<number>(0)

    useEffect(() => {
        if(checked){
            const previous: number = previousExtrasRef.current
            const difference: number = totalExtras - previous

            if(difference !== 0){
                setTotalPrice((prev: number) => prev + difference * 30)
                previousExtrasRef.current = totalExtras
            }
        }else{
            setTotalPrice(sections.filter(section => section.isChecked === true).map(section => section.price).reduce((acc, cur) => acc + cur, 0))
            setTotalExtras(0)
            previousExtrasRef.current = 0
        }
        
    }, [totalExtras, checked])

    const sum = (): void => setTotalExtras(prev => prev + 1)
    const sub = (): void => setTotalExtras(prev => prev > 0 ? prev - 1 : 0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseInt(e.target.value, 10);
        setTotalExtras(isNaN(value) ? 0 : value);
    }

    return { totalExtras, sum, sub, handleInputChange }
}

export default useExtras