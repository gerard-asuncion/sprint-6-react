import type { ModalProps } from "../../types/types"
import { setModalBackground, setModalVisibility } from "../../utils/utils"
import useSubmit from "../../hooks/useSubmit"

const ResetModal = ({open, setOpen, onClose}: ModalProps) => {

    const { resetBudgets } = useSubmit()

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
                        <p className="text-black font-bold">
                            Estàs segur que vols resetejar els pressupostos? Un cop ho hagis fet, no tindràs manera de recuperar-los
                        </p>
                    </div>
                    <div className="flex w-50/100 justify-around">
                        <button
                            className="text-white bg-green-800 border-green-800 rounded-md w-fit p-2 cursor-pointer"
                            onClick={() => setOpen(false)}>
                            Cancel·lar
                        </button>
                        <button 
                            className="text-white bg-red-800 border-red-800 rounded-md w-fit p-2 cursor-pointer"
                            onClick={resetBudgets}>Procedir</button>
                    </div>
                    
                </div>
            </div>
            
        </>
  )
}

export default ResetModal
