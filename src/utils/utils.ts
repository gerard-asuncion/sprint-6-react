import type { Section } from "../types/types"

export const styleCheck = (currentSection: Section) =>
    currentSection.isChecked ? 'border-indigo-500 border-2' : ''

export const expandWeb = (currentSection: Section) =>
    currentSection.isWeb && currentSection.isChecked ? 'justify-around h-50' : 'justify-center h-30'

export const showAndHideWebExtras = (currentSection: Section) => 
    currentSection.isWeb && currentSection.isChecked ? '' : 'hidden'