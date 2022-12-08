import React from "react";
import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "../Profile/EditProfile.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import UpgradedAppointmentsTable from "../Table/UpgradedAppointmentsTable";

interface AppointmentProps {
  open: boolean;
  onClose: () => void;
  // data: any;
}

// export default function EditProfile({ open, onClose, data }: EditProfileProps) {
export default function Appointments({ open, onClose }: AppointmentProps) {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Create Appointments</DialogTitle>
      <UpgradedAppointmentsTable />
    </Dialog>
  );
}
