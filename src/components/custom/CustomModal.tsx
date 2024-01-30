import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalProps } from "../../types/component.types";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const CustomModal = ({ open, handleClose }: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <span className="modal-title">Text in a modal</span>
        <button onClick={handleClose} className="modal-close">
          <FontAwesomeIcon icon={faXmarkCircle} size="lg" />
        </button>
    </div>
        <div className="modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
      </div>
    </div>
  );
};

export default CustomModal;
