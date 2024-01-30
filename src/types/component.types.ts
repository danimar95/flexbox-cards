export interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface CardProps {
  onClick: () => void;
  title: string;
  description: string;
  image: string;
}

export interface CustomCardProps {
    image: string;
}
