import type { ReactNode } from "react"

export type Section = {
    id: number,
    section: string,
    description: string,
    price: number,
    isChecked: boolean,
    isWeb: boolean
}

export type CheckboxProps = {
    id: number
}

export type WebExtrasProps = {
    children: string,
    checked: boolean
}

export type PriceContextType = {
    totalPrice: number,
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
}

export type ProviderProps = {
    children: ReactNode
}

export type SectionsContextType = {
    sections: Section[],
    setSections: React.Dispatch<React.SetStateAction<Section[]>>
}