import type { Section } from "../types/types"

export const styleCheck = (currentSection: Section): string =>
    currentSection.isChecked ? 'border-indigo-500 border-2' : ''

export const expandWeb = (currentSection: Section): string =>
    currentSection.isWeb && currentSection.isChecked ? 'justify-around h-50' : 'justify-center h-30'

export const showAndHideWebExtras = (currentSection: Section): string => 
    currentSection.isWeb && currentSection.isChecked ? '' : 'hidden'