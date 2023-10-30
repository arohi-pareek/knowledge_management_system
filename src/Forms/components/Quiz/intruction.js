import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Intruction = (props) => {
  const { CloseIntstruction } = props;

  return (
    <>
      <DialogTitle
        style={{ cursor: "move" }}
        id="draggable-dialog-title"
        className="dialofAction"
      >
        <Tooltip title="CLOSE">
          <IconButton
            onClick={() => CloseIntstruction()}
            aria-label="close"
            style={{
              position: "absolute",
              right: "8px",
              top: "8px",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <h3 style={{ color: "var(--main-heading)", fontStyle: "initial" }}>
          INSTRUCTIONS
        </h3>
      </DialogTitle>
      <DialogContent dividers>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
          <li style={{ margin: '0.5rem 0' }}>Instruction 1: Lorem ipsum dolor sit amet.</li>
          <li style={{ margin: '0.5rem 0' }}>Instruction 2: Consectetur adipiscing elit.</li>
          <li style={{ margin: '0.5rem 0' }}>Instruction 3: Nulla facilisi.</li>
          <li style={{ margin: '0.5rem 0' }}>Instruction 4: Cras vel semper massa.</li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{ backgroundColor: " #FFAF38", color: "black" }}
          onClick={() => CloseIntstruction()}
        >
          OK
        </Button>
      </DialogActions>
    </>
  );
};

export default Intruction;
