import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { green } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TrainingDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alighItems: "center",
          backgroundColor: "#004d40",
          width: "800",
          height: "600",
          minHeight: "100vh"
        }}>

          <div style={style} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Title
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Box>
      </Modal>
      Training Details
    </>
  );
}

export default TrainingDetails;
