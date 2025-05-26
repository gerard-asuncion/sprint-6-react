export type Section = {
    id: number,
    section: string,
    description: string,
    price: number,
    isChecked: boolean,
    isWeb: boolean
}

export type CheckboxProps = {
    currentSection: Section,
    active: boolean,
    onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
}