import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import CustomCard from "../components/custom/CustomCard";
import CustomModal from "../components/custom/CustomModal";
import AppCard from "../components/materialUI/MaterialCard";
import AppModal from "../components/materialUI/MaterialModal";

const Home = () => {
  const [data] = React.useState(
    Array(10)
      .fill(0)
      .map((_, i) => ({
        title: `Lorem Ipsum ${i + 1}`,
        description:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: `https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/200/300`,
      }))
  );
  const [open, setOpen] = React.useState(false);
  const [customOpen, setCustomOpen] = React.useState(false);
  const [style, setStyle] = React.useState("mui");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenCustom = () => setCustomOpen(true);
  const handleCloseCustom = () => setCustomOpen(false);

  return (
    <>
      {style === "mui" && (
        <Box sx={{ p: 4 }}>
          <Grid container >
            <Grid item xs={12} sm={12} md={10}>
              <Typography variant="h4" component="h2">
                Flexbox layout using Material UI
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} justifyContent={'flex-end'} display={'flex'}>
              <Button variant="contained" onClick={() => setStyle("custom")}>
                Custom
              </Button>
            </Grid>
            {data.map((item, index) => (
              <Grid item xs={12} sm={4} md={3} p={3} key={index} justifyContent={'center'} display={'flex'}>
                <AppCard
                  onClick={handleOpen}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
          <AppModal open={open} handleClose={handleClose} />
        </Box>
      )}
      {style === "custom" && (
        <div className="custom-container">
          <div className="custom-header">
            <span className="custom-title">Custom flexbox layout</span>
            <button className="custom-button" onClick={() => setStyle("mui")}>
              Material UI
            </button>
          </div>
          <div className="card-container">
            {data.map((item, index) => (
              <CustomCard
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={handleOpenCustom}
                key={index}
              />
            ))}
            <CustomModal open={customOpen} handleClose={handleCloseCustom} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
