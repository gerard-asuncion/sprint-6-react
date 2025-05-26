import WebExtras from "./WebExtras"
import type { CheckboxProps } from "../types/types"

const Checkbox = ({currentSection, active, onToggle}: CheckboxProps) => {
  
  return (
    <section className={`flex flex-col w-90/100 p-4 rounded-lg m-auto mt-5 shadow-md 
    ${currentSection.isChecked ? 'border-indigo-500 border-2' : ''}
    ${currentSection.isWeb && currentSection.isChecked ? 'justify-around h-50' : 'justify-center h-30'}`}>
        <section className="flex justify-between items-center">
            <article className="w-60/100">
                <h2 className="text-lg font-bold">{currentSection.section}</h2>
                <p className="text-neutral-600">{currentSection.description}</p>
            </article>
            <article className="text-xl font-bold w-20/100">
                {currentSection.price}€
            </article>
            <article className="w-20/100 flex justify-around">
                <input type="checkbox" name="add" id={`${currentSection.id}`} checked={active} onChange={onToggle} />
                <label htmlFor={`${currentSection.id}`}>Afegir</label>
            </article>
        </section>
        <section className={currentSection.isWeb && currentSection.isChecked ? '' : 'hidden'}>
            <WebExtras>Nombre de pàgines</WebExtras>
            <WebExtras>Nombre de llenguatges</WebExtras>
        </section>
    </section>
  )
}


export default Checkbox
