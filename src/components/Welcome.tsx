import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
        <article className="text-center m-10 p-5 shadow-md rounded-xl">
            Bienvenido! Con esta app podrás calcular presupuestos para la creación, el posicionamiento de una página web
            y el uso de publicidad.
        </article>
        <Link to="/app">
            <button className="border-2 rounded-2xl border-indigo-500 p-2 font-bold">
                Ir a la app
            </button>
        </Link>    
    </section>
  )
}

export default Welcome
