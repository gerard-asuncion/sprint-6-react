import type { ModalProps } from "../../types/types"
import { setModalBackground, setModalVisibility } from "../../utils/utils"


const InfoModal = ({open, setOpen, onClose, children}: ModalProps) => {

  return (
    <>
        <div onClick={onClose} 
            className={
                `fixed inset-0 flex justify-center items-center
                ${setModalBackground(open)}`}>
            <div onClick={(e) => e.stopPropagation()}
                className={`
                flex flex-col justify-center items-center rounded-xl shadow w-90/100 bg-white py-9 gap-1
                ${setModalVisibility(open)}`}>
                <div className="mx-auto my-4 w-70/100 text-center">
                    <p className="">
                    {children}
                    </p>
                </div>
                <button
                    className="text-white bg-gray-500 border-2 border-gray-500 rounded-md w-fit p-1"
                    onClick={() => setOpen(false)}>
                    D'acord
                </button>
            </div>
        </div>
        
    </>
  )
}

export default InfoModal
