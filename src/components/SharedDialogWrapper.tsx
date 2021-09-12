import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button
} from "@material-ui/core";

export function SharedDialogWrapper(props: {
  open: boolean;
  title: string;
  subTitle: string;
  importStatus: string;
  importCompleted: string;
  completed: boolean;
  failedItems: any[];
  handleClose: () => any;
  children?: any;
}) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <div style={{ width: "400px", maxWidth: "100%" }}>
          <p
            style={{
              fontFamily: "sans-serif",
              margin: "0",
              fontSize: "0.9em",
              marginBottom: "16px",
              color: "#555",
            }}
          >
            {props.subTitle}
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              margin: "0",
              fontSize: "0.9em",
              marginBottom: "16px",
              color: "#555",
            }}
          >
           {props.completed ? props.importCompleted : props.importStatus}
          </p>
          {props.failedItems != undefined && props.failedItems.length > 0 ? 
            <p
              style={{
                fontFamily: "sans-serif",
                margin: "0",
                fontSize: "0.9em",
                marginBottom: "16px",
                color: "#555",
              }}
            >
            Failed Items:
            {props.failedItems.map(item => <p>{item.errorMessage + " : "+JSON.stringify(item.data)}</p> )}
            </p>
          : ''}
          {props.children}
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
