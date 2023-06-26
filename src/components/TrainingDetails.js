import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  backgroundColor: "#004d40",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  marginTop: 20,
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alighItems: "center",
          }}
        >
          <div style={style}>
            <Container>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                display="flex"
                justifyContent="center"
                alighItems="center"
                marginTop="30px"
              >
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Descrierea imaginii"
                    width="300"
                    height="150"
                  />
                </div>
              </Typography>

              <div>
                <Container>
                  <Typography
                    display="flex"
                    marginTop="5px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>
                      <h1>
                        <strong>Title</strong>
                      </h1>
                      <br />
                      <h3 style={{ marginTop: "-30px" }}>trainer</h3>
                    </p>
                  </Typography>
                </Container>
              </div>
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex start",
                  marginLeft: "100px",
                  marginTop: "-10px",
                  spacearound:"20"
                }}
              >
                <p>
                  <h6>
                    Nunc congue nisi vitae suscipit tellus mauris a diam
                    maecenas. Et pharetra pharetra massa massa. Senectus et
                    netus et malesuada fames ac turpis egestas integer. Dui
                    sapien eget mi proin.
                  </h6>
                  <br />
                  <h5>
                    start date <br />
                    occupied_slots/max_slots <br />
                    duration <br />
                    status
                  </h5>
                </p>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alingItems: "center",
                  marginTop: "25px",
                }}
              >
                <button
                  name="enroll_button"
                  type="submit"
                  value="submit"
                  style={{
                    borderRadius: "5px 20px",
                    padding: "5px 50px",
                  }}
                  onClick={() =>
                    alert("You have successfully enrolled in this course!")
                  }
                >
                  Enroll
                </button>
              </Typography>
            </Container>
          </div>
        </Box>
      </Modal>
      Training Details
    </>
  );
}

export default TrainingDetails;
