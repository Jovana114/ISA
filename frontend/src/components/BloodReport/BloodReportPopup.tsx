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
  userId: number;
  id: number;
  setStartAppointment: () => void;
  onClose: () => void;
}
export default function BloodReportPopup({
  startAppointment,
  setStartAppointment,
  id,
  userId,
  open,
  onClose,
}: props) {
  const checkAppointment = () => {
    setStartAppointment();
  };

  const handleCancel = async () => {
    const data = await fetch(
      process.env.REACT_APP_API_URL + `/adminCenter/addPenals/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")!
          )}`,
        },
      }
    ).then((response: any) => {
      if(response.status === 200){
        alert("Penals are added to user. ");
      }
    })
  };

  
  const handleCheck = async () => {
    const data = await fetch(
      process.env.REACT_APP_API_URL + `/bloodReport/getUserPartOfReport/${(JSON.parse(sessionStorage.getItem("centerId")!))}_${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")!
          )}`,
        },
      }
    ).then((response: any) => {
      if(response.status === 200){
        alert("User meets the requirements");
      } else {
        alert("User does not meet the requirements");
      }
    })
  };

  return startAppointment ? (
    <>
      <BloodReport open={open} userId={userId} id={id} onClose={onClose} />
    </>
  ) : (
    <>
      <Dialog onClose={onClose} open={open}>
        <Button onClick={checkAppointment}>Start Appointment</Button>
        <Button onClick={handleCancel}>Canceled</Button>
        <Button onClick={handleCheck}>Check requirements</Button>
      </Dialog>
    </>
  );
}
