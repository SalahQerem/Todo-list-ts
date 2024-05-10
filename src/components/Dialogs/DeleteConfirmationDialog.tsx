import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { IDeleteConfirmationDialog } from "./types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteConfirmationDialog = ({
  openCancelDialog,
  isDeletingTodo,
  todoToDeleteTitle,
  handleCancelDeleteTodo,
  handleDeleteTodo,
  handleClose,
}: IDeleteConfirmationDialog) => {
  return (
    <React.Fragment>
      <Dialog
        open={openCancelDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Todo!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Are you sure you want to delete your ${todoToDeleteTitle} Todo?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDeleteTodo}>Cancel</Button>
          <LoadingButton
            size="medium"
            variant="contained"
            color="error"
            loading={isDeletingTodo}
            onClick={handleDeleteTodo}
          >
            Yes, Sure!
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteConfirmationDialog;
