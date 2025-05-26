import { useState } from "react";
import sectionsJson from "../data/sections.json" assert { type: "json" } 
import type { Section } from "../types/types"

export const useCheck = () => {

    const [sections, setSections] = useState<Section[]>(() => JSON.parse(JSON.stringify(sectionsJson)))

    const handleChange = (checked: boolean, id: number): void => {
        
        setSections(sections.map(section => 
            section.id === id
            ? { ...section, isChecked: checked }
            : {...section}          
        ))
    }

    return { sections, handleChange }
}

