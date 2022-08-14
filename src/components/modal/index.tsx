import Modal from "react-modal"
import closeImg from "@/assets/close.svg"
import { useHealthyFood } from "@/context"
import { IChildren } from "@/core/types"

Modal.setAppElement("#root")

export const ModalContent = ({ children }: IChildren) => {
  const { option, setOption } = useHealthyFood()

  return (
    <Modal
      isOpen={option.modal}
      onRequestClose={() => setOption({ ...option, modal: false })}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => setOption({ ...option, modal: false })}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      {children}
    </Modal>
  )
}
