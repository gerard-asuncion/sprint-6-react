import WebExtras from "./WebExtras"
import type { Section, CheckboxProps } from "../../types/types"
import { SectionsContext } from "../../context/sections/SectionsContext"
import { useContext } from "react"
import useCheck from "../../hooks/useCheck"
import usePrice from "../../hooks/usePrice"
import { styleCheck, expandWeb, showAndHideWebExtras } from "../../utils/utils"

const Checkbox = ({id}: CheckboxProps) => {

    const { sections } = useContext(SectionsContext)

    const { handleChange } = useCheck()

    const { setPrice } = usePrice()

    const currentSection = sections.find(section => section.id === id) as Section

  return (
    <section className={`flex flex-col items-around w-90/100 p-4 rounded-lg m-auto mt-5 shadow-md 
    ${styleCheck(currentSection)} ${expandWeb(currentSection)}`}>
        <section className="flex justify-between items-center">
            <article className="w-60/100">
                <h2 className="text-lg font-bold">{currentSection.section}</h2>
                <p className="text-neutral-600">{currentSection.description}</p>
            </article>
            <article className="text-xl font-bold w-20/100">
                {currentSection.price}€
            </article>
            <article className="w-20/100 flex justify-around">
                <input type="checkbox" 
                    name="add" 
                    id={`${currentSection.id}`} 
                    checked={currentSection.isChecked} 
                    onChange={(e) => {
                        handleChange(e.target.checked, id);
                        setPrice(e.target.checked, id)
                    }} />
                <label htmlFor={`${currentSection.id}`}>Afegir</label>
            </article>
        </section>
        <section className={showAndHideWebExtras(currentSection)}>
            <WebExtras 
                checked={currentSection.isChecked} 
                id={currentSection.id}
                type="pages"
                >Nombre de pàgines
            </WebExtras>
            <WebExtras 
                checked={currentSection.isChecked} 
                id={currentSection.id}
                type="languages">
                Nombre de llenguatges
            </WebExtras>
        </section>
    </section>
  )
}


export default Checkbox
