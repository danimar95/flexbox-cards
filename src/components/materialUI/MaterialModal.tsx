import { Grid, IconButton, Modal, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { ModalProps } from "../../types/component.types";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

const MaterialModal = ({ open, handleClose }: ModalProps) => {
  return (
    <Modal
      id="modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "700px"}}
    >
      <Grid container spacing={4} sx={style}>
        <Grid xs={11}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
        </Grid>
        <Grid xs={1}>
          <IconButton aria-label="close-modal" onClick={handleClose}>
            <CancelIcon />
          </IconButton>
        </Grid>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Grid>
    </Modal>
  );
};

export default MaterialModal;
