import useExtras from "../hooks/useExtras"
import type { WebExtrasProps } from "../types/types"

const WebExtras = ({children, checked}: WebExtrasProps) => {

  const { totalExtras, sum, sub, handleInputChange } = useExtras(checked)

  return (
    <article className="flex justify-end text-right p-1 gap-1">
        <label htmlFor={children} className="text-sm">{children}</label>
        <button onClick={sub}>
            <img src="/minus.png" alt="substract" className="size-5" />
        </button>
        <input 
          type="number" 
          name={`${children}`} 
          className="border rounded-sm w-12 text-sm text-center"
          value={totalExtras} 
          onChange={handleInputChange} />
        <button onClick={sum}>
            <img src="/add.png" alt="add" className="size-5" />
        </button>
    </article>
  )
}

export default WebExtras
