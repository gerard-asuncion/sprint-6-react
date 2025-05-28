import { useContext } from "react";
import { SectionsContext } from "../context/SectionsContext";
import { PriceContext } from "../context/PriceContext";

const usePrice = () => {

    const { setTotalPrice } = useContext(PriceContext)

    const { sections } = useContext(SectionsContext)

    const setPrice = (id: number): void => {

        const currentSection = sections.find(section => section.id === id)!

        setTotalPrice(prev => prev + currentSection.price)

    }

    return { setPrice }
}

export default usePrice