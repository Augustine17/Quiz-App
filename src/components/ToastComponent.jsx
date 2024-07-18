import React from "react";
import { Snackbar, SnackbarContent } from "@mui/material";

export default function ToastComponent({ toastOpen, handleCloseToast }) {
  return (
    <Snackbar
      open={toastOpen}
      autoHideDuration={1500}
      onClose={handleCloseToast}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <SnackbarContent
        message="Please select an answer before proceeding."
        style={{ backgroundColor: "#f44336" }}
      />
    </Snackbar>
  );
}
