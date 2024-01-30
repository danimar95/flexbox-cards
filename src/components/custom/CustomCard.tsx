import { CardProps } from "../../types/component.types";

const CustomCard = ({ item, onClick }: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="card" onClick={onClick}>
        <img
          height="200"
          src={item.image}
          alt="green iguana"
          className="card-image"
        />
        <div className="custom-card-info">
          <span className="custom-card-title">{item.title}</span>
          <div className="description">{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
