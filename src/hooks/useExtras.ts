import { useContext, useState, useRef, useEffect } from "react"
import { SectionsContext } from "../context/sections/SectionsContext"
import { PriceContext } from "../context/price/PriceContext"
import { DiscountContext } from "../context/discount/DiscountContext"
import sectionsJson from "../data/sections.json" assert { type: "json" }
import type { Section } from "../types/types"

const useExtras = (checked: boolean, id: number, type: string) => {

    const { sections, setSections } = useContext(SectionsContext)
    const { discount } = useContext(DiscountContext)
     const { setTotalPrice } = useContext(PriceContext)
  
    const [totalExtras, setTotalExtras] = useState<number>(1)
    const previousExtrasRef = useRef<number>(totalExtras)

    const checkedWebSection: boolean = sections.some(section => section.isWeb && section.isChecked)

    useEffect(() => {

        const previous: number = previousExtrasRef.current
        const difference: number = totalExtras - previous

        if(checkedWebSection){

            if(discount){
                setSections(prev => prev.map(section => {                  
                    const newPrice = section.price + difference * 30 * 0.8  
                    return section.isWeb
                    ? {...section, price: newPrice}
                    : {...section}
                }))
                setTotalPrice((prev: number) => prev + difference * 30 * 0.8)
            } else {
                setSections(prev => prev.map(section => {                  
                    const newPrice = section.price + difference * 30
                    return section.isWeb
                    ? {...section, price: newPrice}
                    : {...section}
                }))
                setTotalPrice((prev: number) => prev + difference * 30)
            }
            previousExtrasRef.current = totalExtras

        } else {

            const activeSectionsPrice: number = sections.filter((section: Section) => section.isChecked === true)
                                                .map((section: Section) => section.price)
                                                .reduce((acc: number, cur: number) => acc + cur, 0)
          
            setSections(sections.map((section: Section) => {
                const original: Section = structuredClone(sectionsJson).find((original: Section) => original.isWeb)!
                return section.isWeb
                ? {...section, price: original.price}  
                : {...section}                                              
            }))
       
            setTotalPrice(activeSectionsPrice) 
            setTotalExtras(1)
            previousExtrasRef.current = 1
        
        }

        setSections(prev => prev.map(section => {
            if(section.id === id && section.isWeb && checked){
                if(type === "pages"){
                    return {...section, pages: totalExtras}
                }else if(type === "languages"){
                    return {...section, languages: totalExtras}
                }
            }
            return {...section}
        })) 
        
    }, [totalExtras, checkedWebSection, discount])

    const sum = (): void => setTotalExtras(prev => prev + 1)
    const sub = (): void => setTotalExtras(prev => prev > 1 ? prev - 1 : 1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseInt(e.target.value, 10);
        setTotalExtras(isNaN(value) ? 0 : value);
    }

    return { totalExtras, sum, sub, handleInputChange }
}

export default useExtras