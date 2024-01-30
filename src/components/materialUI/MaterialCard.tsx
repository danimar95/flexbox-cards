import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CardProps } from "../../types/component.types";

const MaterialCard = ({ onClick, item }: CardProps) => (
  <Card sx={{ maxWidth: 345, borderRadius: "20px" }} onClick={onClick}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default MaterialCard;
