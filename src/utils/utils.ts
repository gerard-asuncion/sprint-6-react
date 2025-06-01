import type { Section } from "../types/types"
import { Budget } from "../classes/Budget"

export const styleCheck = (currentSection: Section): string =>
    currentSection.isChecked ? 'border-indigo-500 border-2' : ''

export const expandWeb = (currentSection: Section): string =>
    currentSection.isWeb && currentSection.isChecked ? 'justify-around h-50' : 'justify-center h-30'

export const showAndHideWebExtras = (currentSection: Section): string => 
    currentSection.isWeb && currentSection.isChecked ? '' : 'hidden'

export const displayCustomBudgetsSection = (budgets: Budget[]): string =>
    budgets.length !== 0 ? '' : 'hidden'

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