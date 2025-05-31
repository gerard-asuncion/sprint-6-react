import { useContext } from "react";
import { SectionsContext } from "../context/SectionsContext";
import { PriceContext } from "../context/PriceContext";
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