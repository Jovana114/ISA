import React, { useState } from "react";
import BloodReport from "./BloodReport";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

// setStartAppointment in interface: after closing, const startAppointment is still true
// so setStartAppointment reverts boolean to original state

interface props {
  open: boolean;
  startAppointment: boolean;
  id: number;
  setStartAppointment: () => void;
  onClose: () => void;
}
export default function BloodReportPopup({
  startAppointment,
  setStartAppointment,
  id,
  open,
  onClose,
}: props) {
  const checkAppointment = () => {
    setStartAppointment();
  };

  const handleCancel = async () => {
    const data = await fetch(
      process.env.REACT_APP_API_URL + `/adminCenter/addPenals/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")!
          )}`,
        },
      }
    );
  };

  return startAppointment ? (
    <>
      <BloodReport open={open} id={id} onClose={onClose} />
    </>
  ) : (
    <>
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Edit Profile</DialogTitle>
        <Button onClick={checkAppointment}>Start Appointment</Button>
        <Button onClick={handleCancel}>Canceled</Button>
      </Dialog>
    </>
  );
}
