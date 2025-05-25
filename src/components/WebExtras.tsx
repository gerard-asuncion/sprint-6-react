type Children = {
    children: string
}

const WebExtras = ({children}: Children) => {
  return (
    <article className="flex justify-end text-right p-1 gap-1">
        <label htmlFor={children} className="text-sm">{children}</label>
        <button>
            <img src="/add.png" alt="add" className="size-5" />
        </button>
        <input type="number" name={children} className="border rounded-sm w-12 text-sm text-center" />
        <button>
            <img src="/minus.png" alt="substract" className="size-5" />
        </button>
    </article>
  )
}

export default WebExtras
