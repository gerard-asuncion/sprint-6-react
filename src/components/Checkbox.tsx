type Section = {
    id: number,
    section: string,
    price: number,
    isChecked: boolean,
    isWeb: boolean
}

type Props = {
    currentSection: Section
}

const Checkbox = ({currentSection}: Props) => {
  return (
    <section className="w-90/100 h-20 rounded-lg flex justify-center
    items-center m-auto mt-5">
        <article>
            <h2>{currentSection.section}</h2>
            <p>Programació d'una web responsive completa</p>
        </article>
        <article>
            {currentSection.price}€
        </article>
        <article>
            <input type="checkbox" name="add" id="add" />
            <label htmlFor="add">Afegir</label>
        </article>
    </section>
  )
}

export default Checkbox
