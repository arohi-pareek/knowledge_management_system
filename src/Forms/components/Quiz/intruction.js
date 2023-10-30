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
        <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
          <li style={{ margin: "0.5rem 0" }}>All Questions are Required</li>
          <li style={{ margin: "0.5rem 0" }}>
            There is Four Option in which one Option is Correct
          </li>
          <li style={{ margin: "0.5rem 0" }}>
            Every Question Contains specific Marks
          </li>
          <li style={{ margin: "0.5rem 0" }}>
            Once You Answer all the Question Submit Button will get enable
          </li>
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
