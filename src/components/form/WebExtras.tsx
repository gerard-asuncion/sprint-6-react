import useExtras from "../../hooks/useExtras"
import useModalInfo from "../../hooks/useModalInfo"
import InfoModal from "../ui/InfoModal"
import type { WebExtrasProps } from "../../types/types"
import InfoModalChildren from "../ui/InfoModalChildren"

const WebExtras = ({children, checked, id, type}: WebExtrasProps) => {

  const { totalExtras, sum, sub, handleInputChange } = useExtras(checked, id, type)
  const { open, setOpen } = useModalInfo()

  return (
    <>
      <article className="flex justify-end text-right p-1 gap-1">
          <label htmlFor={children} className="text-sm">{children}</label>
          <button onClick={() => setOpen(true)}>
            <img src="/question.svg" alt="?" className="size-5" />
          </button>
          <button onClick={sub}>
              <img src="/minus.png" alt="substract" className="size-5" />
          </button>
          <input 
            type="number" 
            name={children} 
            className="border rounded-sm w-12 text-sm text-center"
            value={totalExtras} 
            onChange={handleInputChange} />
          <button onClick={sum}>
              <img src="/add.png" alt="add" className="size-5" />
          </button>
      </article>
      <InfoModal open={open} setOpen={setOpen} onClose={() => setOpen(false)}>
        <InfoModalChildren type={type}></InfoModalChildren>
      </InfoModal>
    </>
  )
}

export default WebExtras
