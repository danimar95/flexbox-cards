import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalProps } from "../../types/component.types";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const CustomModal = ({ open, handleClose, title, description, image }: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button onClick={handleClose} className="modal-close">
            <FontAwesomeIcon icon={faXmarkCircle} size="lg" />
          </button>
        </div>
        <img
            height="200"
            src={image}
            alt="random"
            className="card-image-modal"
            width={"100%"}
          />
        <div className="modal-description">{description}</div>
      </div>
    </div>
  );
};

export default CustomModal;
