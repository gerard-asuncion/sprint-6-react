type Children = {
    children: string
}

const WebExtras = ({children}: Children) => {
  return (
    <article>
        <label htmlFor={children}>{children}</label>
        <button>
            <img src="/add.png" alt="add" />
        </button>
        <input type="number" name={children} />
        <button>
            <img src="/minus.png" alt="substract" />
        </button>
    </article>
  )
}

export default WebExtras
