import { createContext } from "react"
import type { SectionsContextType } from "../types/types";

export const SectionsContext = createContext<SectionsContextType>({
    sections: [{ 
        "id": 1, 
        "section": "SEO",
        "description": "Optimització per a motors de cerca",
        "price": 300,
        "isWeb": false,
        "isChecked": false    
    }, {
        "id": 2,
        "section": "Ads",
        "description": "Implementació de publicitat",
        "price": 400,
        "isWeb": false,
        "isChecked": false 
    }, {
        "id": 3,
        "section": "Web",
        "description": "Programació d'una web responsive completa",
        "price": 500,
        "isWeb": true,
        "isChecked": false
    }],
    setSections: () => {}
});