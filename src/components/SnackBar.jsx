import { Snackbar } from "@mui/material";
import React from "react";

export default function SnackBar({ error, setError, errorMessage }) {
  const handelClose = () => {
    setError(false);
  };
  return (
    <Snackbar
      open={error}
      autoHideDuration={4000}
      onClose={handelClose}
      message={errorMessage}
    />
  );
}
