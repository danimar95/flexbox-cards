import { CardProps } from "../../types/component.types";

const CustomCard = ({ image, title, description, onClick }: CardProps) => {
  return (
    <div className="card-wrapper">
        <div className="card" onClick={onClick}>
        <img height="200" src={image} alt="green iguana" className="card-image"/>
        <div className="custom-card-info">
            <span className="custom-card-title">{title}</span>
            <div className="description">{description}</div>
        </div>
        </div>
    </div>
  );
};

export default CustomCard;
