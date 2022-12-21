import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import BloodReportPopup from "../BloodReport/BloodReportPopup";

interface props {
  id: number;
  date: string;
}

export default function Times({ id, date }: props) {
  const [appointments, setAppointments] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const [startAppointment, setStartAppointment] = useState(false);
  const [appId, setAppointmentId] = useState(0);
  const [appUserId, setUserAppointmentId] = useState(0);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
    },
  };

  var cId = JSON.parse(sessionStorage.getItem("centerId")!)

  const searchData = async (searchText: string) => {
    if (searchText !== "") {
      const data = await fetch(
        process.env.REACT_APP_API_URL +
          `/blood/all/center/${cId}/${date}/${searchText}`,
        config
      );
      const json = await data.json();
      // console.log(json);

      if (json) setAppointments(json);
    }
  };
  const fetchData = async () => {
    const data = await fetch(
      process.env.REACT_APP_API_URL + `/blood/all/center/${cId}/${date}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")!
          )}`,
        },
      }
    );
    const json = await data.json();
    console.log(json);

    if (json) setAppointments(json);
  };

  const reset = () => {
    setSearchText("");
    fetchData();
  };

  const handleOpenReport = (appointment: any) => {
    if (appointment.userId !== null) {
      setOpen(true);
      setAppointmentId(appointment.id);
      setUserAppointmentId(appointment.userId);
      console.log(appointment.id);
    }
  };

  const handleClose = () => {
    setStartAppointment(false);
    setOpen(false);
  };

  const start = () => {
    setStartAppointment(true);
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, [id]);

  return appointments ? (
    <div className="row">
      <div style={{ display: "flex", verticalAlign: "middle" }}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: "70%", margin: "0 auto", marginBottom: "30px" }}
          value={searchText}
        />
        <Button onClick={() => searchData(searchText)}>Search</Button>
        <Button onClick={() => reset()}>
          <RestartAltIcon />
        </Button>{" "}
      </div>
      {appointments.map((appointment: any, key) => (
        <div
          className="column"
          key={key}
          onClick={() => handleOpenReport(appointment)}
        >
          <div className="card">
            <h6>{appointment.date}</h6>
            <p>
              Time: <b>{appointment.time}</b>
            </p>
            <p>
              Duration: <b>{appointment.duration}</b> mins
            </p>
            {(appointment.first_name !== null && appointment.last_name !== null) && <p>
              User:{" "}
              <b>{appointment.first_name + " " + appointment.last_name}</b>
            </p>}
          </div>
        </div>
      ))}
      <BloodReportPopup
        startAppointment={startAppointment}
        setStartAppointment={start}
        userId={appUserId}
        id={appId}
        open={open}
        onClose={handleClose}
      />
    </div>
  ) : (
    <div className="row">
      <div className="column-full">
        <div className="card-full">No Appointments Found!</div>
      </div>
    </div>
  );
}
