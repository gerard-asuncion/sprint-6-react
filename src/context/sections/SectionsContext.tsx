import { createContext } from "react"
import type { SectionsContextType } from "../../types/types";

export const SectionsContext = createContext<SectionsContextType>({
    sections: [{ 
        "id": 1, 
        "section": "SEO",
        "description": "Optimització per a motors de cerca",
        "price": 300,
        "isWeb": false,
        "isChecked": false,
        "hasDiscount": false,
        "pages": 0,
        "languages": 0   
    }, {
        "id": 2,
        "section": "Ads",
        "description": "Implementació de publicitat",
        "price": 400,
        "isWeb": false,
        "isChecked": false,
        "hasDiscount": false,
        "pages": 0,
        "languages": 0
    }, {
        "id": 3,
        "section": "Web",
        "description": "Programació d'una web responsive completa",
        "price": 500,
        "isWeb": true,
        "isChecked": false,
        "hasDiscount": false,
        "pages": 1,
        "languages": 1
    }],
    setSections: () => {}
});