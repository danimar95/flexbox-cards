export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  description: string;
  image: string;
}

export interface CardProps {
  onClick: () => void;
  item: Item;
}

export interface CustomCardProps {
    image: string;
}

export interface Item {
  title: string;
  description: string;
  image: string;
}