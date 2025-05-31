import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
        <article className="text-center m-10 p-5 shadow-md rounded-xl">
            Benvingut! Amb aquesta app podràs calcular pressupostos per a la creació d'una pàgina web, el posicionament
            d'aquesta i l'ús de publicitat.
        </article>
        <Link to="/app">
            <button className="border-2 rounded-2xl border-indigo-500 p-3 font-bold">
                App
            </button>
        </Link>    
    </section>
  )
}

export default Welcome
