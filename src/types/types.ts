import type { ReactNode } from "react"
import { Budget } from "../classes/Budget"

export type Section = {
    id: number,
    section: string,
    description: string,
    price: number,
    isChecked: boolean,
    isWeb: boolean,
    pages: number | null,
    languages: number | null
}

export type CheckboxProps = {
    id: number
}

export type WebExtrasProps = {
    children: string,
    checked: boolean,
    id: number,
    type: string
}

export type ModalInfoProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    onClose: () => void,
    children: React.ReactNode
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

export type BudgetsContextType = {
    budgets: Budget[],
    setBudgets: React.Dispatch<React.SetStateAction<Budget[]>>
}

export type BudgetProps = {
    budget: Budget
}

export type CustomBudgetSearchProps = {
    search: string
}

export type CustomBudgetSortProps = {
    value: string
}

export type ValidationContextType = {
    errors: ErrorType[],
    setErrors: React.Dispatch<React.SetStateAction<ErrorType[]>>
}

export type ErrorType = {
    input?: string,
    message: string 
}

export type InfoModalChildrenProps =  {
    type: string
}