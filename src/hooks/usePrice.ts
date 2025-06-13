import { useContext } from "react";
import { SectionsContext } from "../context/sections/SectionsContext";
import { PriceContext } from "../context/price/PriceContext";
import type { Section } from "../types/types";

const usePrice = () => {

    const { setTotalPrice } = useContext(PriceContext)

    const { sections } = useContext(SectionsContext)

    const setPrice = (checked: boolean, id: number): void => {

        const currentSection: Section = sections.find(section => section.id === id)!

        if(checked){
            setTotalPrice(prev => prev + currentSection.price)
        } else {
            setTotalPrice(prev => prev - currentSection.price)
        }
    }

    return { setPrice }
}

export default usePrice