import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CardProps } from "../../types/component.types";


const MaterialCard = ({ onClick, title, image, description }: CardProps) => (
  <Card sx={{ maxWidth: 345, borderRadius: "20px" }} 
    onClick={onClick}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default MaterialCard;
