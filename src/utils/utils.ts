import type { Section, ErrorType } from "../types/types"
import { Budget } from "../classes/Budget"

export const styleCheck = (currentSection: Section): string =>
    currentSection.isChecked ? 'border-indigo-500 border-2' : ''

export const expandWeb = (currentSection: Section): string =>
    currentSection.isWeb && currentSection.isChecked ? 'justify-around h-50' : 'justify-center h-30'

export const showAndHideWebExtras = (currentSection: Section): string => 
    currentSection.isWeb && currentSection.isChecked ? '' : 'hidden'

export const displayCustomBudgetsSection = (budgets: Budget[]): string =>
    budgets.length > 0 ? '' : 'hidden'

export const singPluralPagLang = (type: string, num: number): string => {
    let word = ""
    if(type === "pages"){
        num === 1
        ? word = "pàgina"
        : word = "pàgines"
    }else if(type === "languages"){
        num === 1
        ? word = "llenguatge"
        : word = "llenguatges"
    }
    return word
}

export const safetyCustomBudgetsDisplay = (budgets: Budget[]): boolean => {
    if(budgets){
        const includesLangAndPag: boolean = budgets.filter(budget => budget.services.includes("Web")).some(budget => budget.pages && budget.languages)
        const isUndefined: boolean = budgets.some(budget => !(budget.services && includesLangAndPag))

        if(isUndefined){
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

export const displaySearch = (search: string): boolean => 
    search != "" ? true : false

export const sortBudgets = (budgets: Budget[], value: string): Budget[] => {
    
    const parseValue: number = parseInt(value)
    let sortResult: Budget[] = []
    
    switch(parseValue){
        case 1:
            sortResult = budgets.toSorted((a, b) => a.date.getTime() - b.date.getTime())
            break
        case 2:
            sortResult = budgets.toSorted((a, b) => a.date.getTime() - b.date.getTime()).toReversed()       
            break
        case 3:
            sortResult = budgets.toSorted((a, b) => {
                if(a.totalBudget === b.totalBudget && a.name === b.name){
                    return a.date.getTime() - b.date.getTime()
                }else if(a.totalBudget === b.totalBudget){
                    return a.name.localeCompare(b.name)
                }else{
                    return a.totalBudget - b.totalBudget
                }   
            })            
            break
        case 4:
            sortResult = budgets.toSorted((a, b) => {
                if(a.totalBudget === b.totalBudget && a.name === b.name){
                    return a.date.getTime() - b.date.getTime()
                }else if(a.totalBudget === b.totalBudget){
                    return a.name.localeCompare(b.name)
                }else{
                    return b.totalBudget - a.totalBudget
                }   
            })       
            break
        case 5:
            sortResult = budgets.toSorted((a, b) => {
                if(a.name === b.name){
                    return a.date.getTime() - b.date.getTime()
                } else {
                    return a.name.localeCompare(b.name)
                }
            })
            break
    }

    return sortResult
}

export const validationErrorMessage = (errors: ErrorType[]): string => {
    let message = ""
    if(errors.length === 1){
        message = "Error de validació:"
    }else if(errors.length > 1){
        message = "Errors de validació:"
    }
    return message
}

export const displayColorBorder = (errorField: string, errors: ErrorType[]): string =>
    errors.some(error => error.input === errorField)
    ? 'border-red-700'
    : 'border-gray-400'

export const setModalBackground = (openState: boolean): string =>
    openState
    ? "visible bg-black/20"
    : "hidden"

export const setModalVisibility = (openState: boolean): string =>
    openState
    ? "scale-100 opacity-100" 
    : "hidden"

export const setModalInfoChildrenClassNames = (element: string): string => {
    if(element === "title"){
        return "font-bold p-3"
    }else if(element === "p"){
        return "text-neutral-600 p-3"
    }else{
        return ""
    }
}

export const applyDiscount = (price: number, hasDiscount: boolean): number => 
    hasDiscount
    ? price * 0.8
    : price / 0.8